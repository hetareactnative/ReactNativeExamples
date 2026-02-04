import { parseDocument } from 'htmlparser2/lib/index';

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

/* ---------------------------------- */
/* HTML CONTENT */
/* ---------------------------------- */
const htmlText = `
<h1>Welcome to the Typing Animation Demo</h1>

<p>
This paragraph demonstrates <b>bold text</b>, <i>italic text</i>,
<u>underlined text</u>, and even <b><i>nested bold-italic text</i></b>.
</p>

<p>
You can also highlight <code>inline code</code> inside normal sentences
</p>

<h2>Unordered List Example</h2>

<ul>
  <li>First item with <b>bold text</b></li>
  <li>Second item with <i>italic text</i></li>
  <li>Third item with <u>underline</u></li>
</ul>

<h2>Ordered List Example</h2>

<ol>
  <li>Step one – basic formatting</li>
  <li>Step two – advanced formatting</li>
  <li>Step three – <code>finalize()</code> and test</li>
</ol>
`;

/* ---------------------------------- */
/* TYPES */
/* ---------------------------------- */
type WordToken = {
  text: string;
  style: any;
  newline?: boolean;
  isBullet?: boolean;
};

/* ---------------------------------- */
/* HTML → WORD TOKENS */
/* ---------------------------------- */
const parseHTMLToTokens = (html: string): WordToken[] => {
  const doc = parseDocument(html);
  const tokens: WordToken[] = [];
  let currentListType: 'ul' | 'ol' | null = null;
  let listItemIndex = 0;

  const walk = (node: any, style: any = {}) => {
    if (node.type === 'text') {
      node.data.split(/\s+/).forEach((word: string) => {
        if (word) tokens.push({ text: word, style });
      });
      return;
    }

    if (
      node.name === 'br' ||
      node.name === 'p' ||
      node.name === 'h1' ||
      node.name === 'h2'
    ) {
      tokens.push({ text: '', style: {}, newline: true });
    }

    if (node.name === 'ul') {
      currentListType = 'ul';
      listItemIndex = 0;
      tokens.push({ text: '', style: {}, newline: true }); // Add newline before list starts
    }

    if (node.name === 'ol') {
      currentListType = 'ol';
      listItemIndex = 0;
      tokens.push({ text: '', style: {}, newline: true }); // Add newline before list starts
    }

    if (node.name === 'li') {
      // Add bullet or number before list item
      const bullet = currentListType === 'ol' ? `${listItemIndex + 1}.` : '•';
      tokens.push({
        text: bullet,
        style: { ...style, fontWeight: 'bold' },
        isBullet: true,
      });
      listItemIndex++;
    }

    let nextStyle = { ...style };

    if (node.name === 'b') nextStyle.fontWeight = 'bold';
    if (node.name === 'i') nextStyle.fontStyle = 'italic';
    if (node.name === 'u') nextStyle.textDecorationLine = 'underline';
    if (node.name === 'code') {
      nextStyle.fontFamily = 'monospace';
      nextStyle.backgroundColor = '#f7fafc';
      nextStyle.paddingHorizontal = 4;
      nextStyle.borderRadius = 4;
    }
    if (node.name === 'h1') nextStyle = { ...styles.h1 };
    if (node.name === 'h2') nextStyle = { ...styles.h2 };

    if (node.children) {
      node.children.forEach((child: any) => walk(child, nextStyle));
    }

    if (node.name === 'li') {
      tokens.push({ text: '', style: {}, newline: true }); // Newline after each list item
    }
  };

  doc.children.forEach((child: any) => walk(child));
  return tokens;
};

/* ---------------------------------- */
/* COMPONENT */
/* ---------------------------------- */
const TypewriterHTML = () => {
  const tokens = useRef(parseHTMLToTokens(htmlText)).current;
  const [items, setItems] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= tokens.length) return;

    const token = tokens[index];

    if (token.newline) {
      setItems(prev => [...prev, { newline: true }]);
      setIndex(i => i + 1);
      return;
    }

    const opacity = new Animated.Value(0.3);

    setItems(prev => [...prev, { ...token, opacity }]);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      setIndex(i => i + 1);
    }, 50);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <View style={styles.container}>
      {items.map((item, i) =>
        item.newline ? (
          <View key={i} style={{ width: '100%', height: 8 }} />
        ) : (
          <Animated.Text
            key={i}
            style={[styles.text, item.style, { opacity: item.opacity }]}
          >
            {item.isBullet ? item.text + ' ' : item.text + ' '}
          </Animated.Text>
        ),
      )}

      <Text style={styles.cursor}>|</Text>
    </View>
  );
};

export default TypewriterHTML;

/* ---------------------------------- */
/* STYLES */
/* ---------------------------------- */
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  h2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  cursor: {
    fontSize: 18,
    color: '#000',
    opacity: 0.6,
    marginLeft: 2,
  },
});

const padding = (text, size) => {
  const pad = " ".repeat(size);
  if (typeof text === 'string') {
    return pad + text + pad; 
  } else if (Array.isArray(text)) {
    return text.map(el => pad + el + pad);
  }
}

module.exports = padding;
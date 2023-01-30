const cropLongText = text => {
  return text.length > 90 ? `${text.substring(0,90)}...` : text
}

export default cropLongText
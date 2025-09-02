function obtenerVariables(expr) {
  let e = expr.toUpperCase();

  // Reemplazar operadores lógicos por espacios para excluirlos
  const operadores = ['AND', 'OR', 'NOT', 'XOR', 'IMPLIES', 'IFF'];
  operadores.forEach(op => {
    const re = new RegExp('\\b' + op + '\\b', 'g');
    e = e.replace(re, ' ');
  });

  // Buscar solo letras mayúsculas aisladas (variables)
  const vars = e.match(/\b[A-Z]\b/g);

  if (!vars) return [];
  
  // Quitar duplicados y ordenar
  const unica = Array.from(new Set(vars));
  unica.sort();
  return unica;
}
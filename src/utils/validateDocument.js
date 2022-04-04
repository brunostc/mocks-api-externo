export const validateCNPJ = (str) => {
  let test = true;
  const cnpj = str.replace(/[^\d]+/g, "");

  if (cnpj === "") {
    return false;
  }
  if (cnpj.length !== 14) {
    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj === "00000000000000" ||
    cnpj === "11111111111111" ||
    cnpj === "22222222222222" ||
    cnpj === "33333333333333" ||
    cnpj === "44444444444444" ||
    cnpj === "55555555555555" ||
    cnpj === "66666666666666" ||
    cnpj === "77777777777777" ||
    cnpj === "88888888888888" ||
    cnpj === "99999999999999"
  ) {
    return false;
  }

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += numeros.charAt(tamanho - i) * pos;
    pos -= 1;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(0))) {
    test = false;
  }

  tamanho += 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += numeros.charAt(tamanho - i) * pos;
    pos -= 1;
    if (pos < 2) pos = 9;
  }
  resultado = 0;
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== Number(digitos.charAt(1))) {
    test = false;
  }
  return test;
};

export const validateCPF = (doc) => {
  const cpf = doc.replace(/[^\d]+/g, "");
  let result;
  if (
    !cpf ||
    cpf === "" ||
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }
  // Validates DV1
  let sum = 0;
  let rest = 0;
  for (let i = 1; i <= 9; i += 1) {
    const x = cpf[i - 1];
    sum += x * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== Number(cpf[9])) {
    result = false;
  }
  // Validates DV2
  sum = 0;
  for (let i = 1; i <= 10; i += 1) {
    const y = cpf[i - 1];
    sum += y * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== Number(cpf[10])) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

export const verifyDocument = (string_document) => {
  let result = false;
  if (!!string_document && string_document !== "") {
    const doc = string_document.replace(/[^\d]+/g, "");
    if (doc.length === 14) {
      result = validateCNPJ(string_document);
    } else if (doc.length === 11) {
      result = validateCPF(string_document);
    } else {
      result = false;
    }
  }
  return result;
};

export const checkDocument = (doc) => {
  let result;
  if (doc !== undefined) {
    const docCheck = verifyDocument(doc);
    if (docCheck) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = true;
  }
  return result;
};

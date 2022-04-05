import {
  // response_cpf_regular,
  error_invalid_document,
  response_cpf_inexistente,
} from "../mocks/quickvalidationmock";

class QuickValidationModel {
  getResponseDocument(request) {
    const document_number = request?.body?.q;
    const is_valid_document = (document_number === "doc{10841201943}");
    if (is_valid_document) {
    //     return response_cpf_regular;
    // } else {
       return response_cpf_inexistente;
    }
  }
}

export default QuickValidationModel;

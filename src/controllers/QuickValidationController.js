import { response_cpf_regular, setResponse_cpf_inexistente, setResponse_cpf_irregular, setResponse_cpf_regular } from "../mocks/quickvalidationmock";
import QuickValidationModel from "../models/QuickValidationModel";
import { TYPE_DEFAULT_QUICKVALIDATION } from "../utils/contants";

let type_response = TYPE_DEFAULT_QUICKVALIDATION;
let document_config = ''

function setType(type) {
  return (type_response = type ? type : TYPE_DEFAULT_QUICKVALIDATION);
}

function setdocument(doc) {
  document_config = doc;
  return document_config;
}

function getResponseByType(type, request) {
  switch (type) {
    case "response_cpf_regular":
      return response_cpf_regular;
    case "response_cpf_irregular_info":
        return setResponse_cpf_irregular(document_config);
    case "response_cpf_regular_info":
      return setResponse_cpf_regular(document_config);
    case "response_cpf_inexistente_info":
      return setresponse_cpf_inexistente(document_config);
    case "validate_document_number_payload": {
      const quickvalidationModel = new QuickValidationModel();
      return quickvalidationModel.getResponseDocument(request);
    }
    default:
      return response_cpf_regular;
  }
}

class QuickValidationController {
    async config(request, response) {
        try {
          const type = setType(request?.body?.type);
          const document = setdocument(request?.body?.doc);
          await response.status(200).send({ type, document });
        } catch (error) {
          await response.status(500).send({ message: "error" });
        }
      }
    
      async index(request, response) {
        await response
          .status(getResponseByType(type_response, request).status_code)
          .send(getResponseByType(type_response, request).data);
      }
}

export default QuickValidationController
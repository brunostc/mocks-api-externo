import {
  setResponse_cpf_inexistente,
  setResponse_cpf_irregular,
  setResponse_cpf_regular,
} from "../mocks/quickvalidationmock";
import QuickValidationModel from "../models/QuickValidationModel";
import { TYPE_DEFAULT_QUICKVALIDATION } from "../utils/contants";

let type_response = TYPE_DEFAULT_QUICKVALIDATION;
let document_config = "";
let resps = [];

function setType(type) {
  resps[document_config] = type;
  return (type_response = type ? type : TYPE_DEFAULT_QUICKVALIDATION);
}

function getdocument(doc) {
  document_config = doc.substring(4,15)
}

function setdocument(doc) {
  document_config = doc;
  return document_config;
}

function getResponseByType(request) {
  let type = resps[document_config]
  switch (type) {
    case "response_cpf_irregular_info":
      return setResponse_cpf_irregular(document_config);
    case "response_cpf_regular_info":
      return setResponse_cpf_regular(document_config);
    case "response_cpf_inexistente_info":
      return setResponse_cpf_inexistente(document_config);
    case "validate_document_number_payload": {
      const quickvalidationModel = new QuickValidationModel();
      return quickvalidationModel.getResponseDocument(request);
    }
    default:
      return setResponse_cpf_regular(document_config);
  }
}

class QuickValidationController {
  async listdocs(request, response) {
    try {
      const documents = resps;
      await response.status(200).send({documents});
    } catch (error) {
      await response.status(500).send({ message: "error" });
    }
  }

  async config(request, response) {
    try {
      const document = setdocument(request?.body?.doc);
      const type = setType(request?.body?.type);
      await response.status(200).send({ type, document});
    } catch (error) {
      await response.status(500).send({ message: "error" });
    }
  }

  async index(request, response) {
    try {
      getdocument(request?.body?.q);
      await response
        .status(getResponseByType(request).status_code)
        .send(getResponseByType(request).data);
    } catch (error) {
      await response.status(500).send({ message: "error" });
    }
  }
}

export default QuickValidationController;

import TransactionModel from "../models/GatewayTransactionModel";
import { TYPE_DEFAULT_GATEWAY } from "../utils/contants";
import {
  error_invalid_signature,
  error_merchant_not_found,
  response_deposit_pix_success,
  response_error_empty_amount,
  response_error_user_kyc_limit_exceeded,
} from "../mocks/gatewayTransactions";

let type_response = TYPE_DEFAULT_GATEWAY;

function setType(type) {
  return (type_response = type ? type : TYPE_DEFAULT_GATEWAY);
}

function getResponseByType(type, request) {
  switch (type) {
    case "deposit_pix_success":
      return response_deposit_pix_success;
    case "error_empty_amount":
      return response_error_empty_amount;
    case "error_user_kyc_limit_exceeded":
      return response_error_user_kyc_limit_exceeded;
    case "error_merchant_not_found":
      return error_merchant_not_found;
    case "error_invalid_signature":
      return error_invalid_signature;
    case "validate_document_number_payload": {
      const transactionModel = new TransactionModel();
      return transactionModel.getTransactionWithDocumentValidator(request);
    }

    default:
      return response_deposit_pix_success;
  }
}

class GatewayTransactionsController {
  async config(request, response) {
    try {
      const type = setType(request?.body?.type);
      await response.status(200).send({ type });
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

export default GatewayTransactionsController;

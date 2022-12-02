import {
  error_invalid_document,
  response_deposit_pix_success,
} from "../mocks/gatewayTransactions";
import { checkDocument } from "../utils/validateDocument";

class TransactionModel {
  getTransactionWithDocumentValidator(request) {
    const document_number = request?.body?.document_number;
    const is_valid_document = checkDocument(document_number);
    return is_valid_document
      ? response_deposit_pix_success
      : error_invalid_document;
  }
}

export default TransactionModel;

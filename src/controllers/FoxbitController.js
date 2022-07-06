import sub_member from "../mocks/sub_member";

function responseSub_member() {
    return sub_member
};

class FoxbitController {
    async sub_member(request, response) {
        try {
            await response
              .status(responseSub_member().status_code)
              .send(responseSub_member().data);
          } catch (error) {
            await response.status(500).send({ message: "error" });
          }
        }
}

export default FoxbitController;
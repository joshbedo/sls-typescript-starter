import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import commonMiddleware from "../lib/commonMiddleware";

export async function hello(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {

  // need to access db name?
  console.log(process.env.EXAMPLE_TABLE_NAME);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Your serverless function executed successfully!",
    }),
  };
}

export const handler = commonMiddleware(hello);
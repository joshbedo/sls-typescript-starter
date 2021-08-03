import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import commonMiddleware from "../lib/commonMiddleware";
import createError from 'http-errors';

export async function error(
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> {

  // uh oh
  throw new createError.Forbidden('access denied');
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: "Your serverless function executed successfully!",
  //     context,
  //     event,
  //   }),
  // };
}

export const handler = commonMiddleware(error);
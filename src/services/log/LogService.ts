export const LogService = {
    log(error: Error) {
        console.log(error.message);
        throw error;
        //send to slack channel.
        //send to sentry or email.
    }
}
# NailedIT-server

This is server side application that goes along with NailedIT client side application: [https://github.com/PavleNeskovic/NailedIT](https://github.com/PavleNeskovic/NailedIT). Please make sure that you read the instruction from that page for complete setup of this project.


### Prerequisites

1. Sign up for an [IBM Cloud account](https://console.bluemix.net/registration/).
1. Create an instance of the Speech to Text service and get your credentials:
    - Go to the [Speech to Text](https://console.bluemix.net/catalog/services/speech-to-text) page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value.
    - Copy the `url` value.
1.  Create environment variables with `apikey` and `url` as values.
    ```
    SPEECH_TO_TEXT_IAM_APIKEY=`apikey`
    SPEECH_TO_TEXT_URL=`url`
    ```

## Configuring the application

1. Install the dependencies

    ```
    npm install
    ```

1. Run the application

    ```
    node index.js
    ```
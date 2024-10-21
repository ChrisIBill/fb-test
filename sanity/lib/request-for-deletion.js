// Define the RequestForDeletion component

import { Button, Dialog, Flex, Box } from '@sanity/ui';

const RequestForDeletion = ({ id, onComplete }) => {
  const handleRequestDeletion = async () => {
    try {
      // Make the API call to update the document to set deletionRequested to true
      await sanityClient
        .patch(id)
        .set({ deletionRequested: true }) // Set the boolean field to true
        .commit();
      
      // Once the request is successful, execute the onComplete callback
      onComplete();
    } catch (error) {
      console.error('Error requesting deletion:', error);
    }
  };

  return (
    <Button text="Request for Deletion" onClick={handleRequestDeletion} />
  );
};

export default RequestForDeletion;

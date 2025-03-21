import React from 'react';
import {
  Bullseye,
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  Spinner,
  EmptyStateActions,
  EmptyStateHeader,
  EmptyStateFooter,
} from '@patternfly/react-core';
import { CheckCircleIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';

const SuccessPage = ({
  handleFetchKeys,
  isLoading,
  name,
  onClose,
  setKeyName,
}) => {
  const handleOnClose = async () => {
    await handleFetchKeys();
    setKeyName(name);
    onClose();
  };

  const content = isLoading ? (
    <Spinner />
  ) : (
    <EmptyState>
      <EmptyStateHeader
        titleText="Activation key created"
        icon={<EmptyStateIcon color="green" icon={CheckCircleIcon} />}
        headingLevel="h4"
      />
      <EmptyStateBody>
        <b>{name}</b> is now available for use. Close to continue with
        registration assistant.
      </EmptyStateBody>
      <EmptyStateFooter>
        <EmptyStateActions>
          <Button variant="link" onClick={() => handleOnClose()}>
            Close
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );

  return <Bullseye>{content}</Bullseye>;
};

SuccessPage.propTypes = {
  handleFetchKeys: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  setKeyName: PropTypes.func,
};

export default SuccessPage;

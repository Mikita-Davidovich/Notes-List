import React from 'react';
import PropTypes from 'prop-types';

import ButtonsEditDelete from './ButtonsEditDelete';
import { Title, Description, Date, Wrapper, EditPanel } from './styled';

const NoteContent = ({ initialNote: { title, description, date }, isEditPanel, openEditPannel, onChange, onUpdate, onCancel }) => {
  const isDefaultText = title === 'Select note to display';
  return (
    <EditPanel>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </Wrapper>
      {!isDefaultText && <ButtonsEditDelete
        isEditPanel={isEditPanel}
        openEditPannel={openEditPannel}
        title={title}
        description={description}
        onChange={onChange}
        onUpdate={onUpdate}
        onCancel={onCancel}
      />}
    </EditPanel>
  );
};

NoteContent.propTypes = {
  initialNote: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  isEditPanel: PropTypes.bool.isRequired,
  openEditPannel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

NoteContent.defaultProps = {
  initialNote: 'Hello',
};
export default NoteContent;

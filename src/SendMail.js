import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='sendmail'>
      <div className='sendmail__header'>
        <h3>New Message</h3>
        <CloseIcon
          className='sendmail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendmail__error'>To is rquired!</p>}

        <input
          name='subject'
          placeholder='Subject'
          type='text'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className='sendmail__error'>Subject is rquired!</p>
        )}

        <input
          name='message'
          className='sendmail__message'
          placeholder='Message..'
          type='text'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendmail__error'>Message is rquired!</p>
        )}

        <div className='sendmail__options'>
          <Button
            className='sendmail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;

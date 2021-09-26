import styled from 'styled-components';
import { FormButton } from '../styledElements/Buttons';
import { textStyles } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';

const StyledForm = styled.form`
  .form-control {
    margin: 2rem 0;
    border-bottom: 0.1rem solid var(--white);

    &.input-error {
      border-bottom: 0.1rem solid var(--lightCoral);
    }
  }

  .input,
  .textarea {
    ${textStyles}
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 1.5rem;
    padding: 1.5rem 0;
    width: 100%;
    resize: none;
    color: var(--white);
  }

  .textarea {
    height: 20vh;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    margin: 2rem 0;
  }

  .message {
    ${textStyles}
    color: var(--lightCoral);
    font-size: 1.1rem;
  }
`;

const ContactForm = () => {
  const { handleSubmit, register, errors, onSubmit } = useGlobalContext();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-aos='fade-in'>
      <div className={`form-control ${errors.name && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Name'
          autoComplete='off'
          {...register('name', { required: true })}
        />
      </div>
      {errors.name && <small className='message'>name is required.</small>}
      <div className={`form-control ${errors?.email && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Email'
          autoComplete='off'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
      </div>
      {errors?.email && (
        <small className='message'>{errors.email.message}</small>
      )}
      <div className='form-control'>
        <input
          type='text'
          className='input'
          placeholder='Company Name'
          autoComplete='off'
        />
      </div>
      <div className={`form-control ${errors.title && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Title'
          autoComplete='off'
          {...register('title', { required: true })}
        />
      </div>
      {errors.title && (
        <small className='message'>subject title is required.</small>
      )}
      <div className={`form-control ${errors.message && 'input-error'}`}>
        <textarea
          className='textarea'
          placeholder='Message'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      {errors.message && (
        <small className='message'>subject message is required.</small>
      )}
      <div>
        <FormButton type='submit' value='Submit' />
      </div>
    </StyledForm>
  );
};

export default ContactForm;

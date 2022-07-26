import React, { useState } from "react";
import Message from "../messageItem/messageItem";
import item from "./messages.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../commen/commenFile/Formscontrols/FormsControl";
import {
  minLengthCreator,
  maxLengthCreator,
} from "../../../utils/validators/validators";

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          onClick={props.addNewMessage}
          onChange={(event) => props.setNewMessage(event.target.value)}
          value={props.newMessage}
          placeholder="messages"
          component={Textarea}
          name="newMessageText"
          validate={[minLengthCreator(2), maxLengthCreator(200)]}
        />
      </div>
      <div>
        <button>add</button>
      </div>
    </form>
  );
};

const ReduxMessageForm = reduxForm({
  form: "messageForm",
})(addMessageForm);

const Messages = (props) => {
  const [message, setMessage] = useState(props.messageData);
  const [newMessage, setNewMessage] = useState("");

  let messagArray = message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addNewMessage = () => {
    setMessage([...message, { id: Date.now(), message: newMessage }]);
  };
  // const onSubmit = (formData) => {
  //   console.log(formData);
  /// };

  return (
    <div>
      <div className={item.messages}>{messagArray}</div>
      <ReduxMessageForm
        onSubmit={addNewMessage}
        setNewMessage={setNewMessage}
        newMessage={newMessage}
      />
    </div>
  );
};

export default Messages;

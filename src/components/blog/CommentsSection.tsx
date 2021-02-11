import React, { FormEvent, FunctionComponent, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from '../../assets/scss/_articles.module.scss';

import Modal from '../shared/modal';

import { ICommentPage } from '../../interfaces/blog.interfaces';
import useCommentMutation from '../../hooks/useCommentMutation';

const CommentsSection: FunctionComponent<ICommentPage> = ({ comments, articleId }) => {
  const createComment = useCommentMutation();
  const [openModal, setOpen] = useState(false);

  const sendComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    const displayName = currentTarget.displayName.value;
    const email = currentTarget.email.value;
    const comment = currentTarget.comment.value;

    createComment({
      variables: {
        displayName,
        email,
        comment,
        article: articleId,
        published_at: null,
        commentDate: new Date()
      }
    });

    setTimeout(() => {
      currentTarget.displayName.value = '';
      currentTarget.email.value = '';
      currentTarget.comment.value = '';
    }, 100);
    setOpen(true);
  }

  return (
    <>
      <Row>
        <Col className={styles.commentsSection} lg={8}>
          <h2>Comentarios:</h2>
          {
            comments.map(({comment, displayName, commentDate}, index) => (
              <div className={styles.commentItem} key={index}>
                <h3>{ displayName }:</h3>
                <p>{ comment }</p>
                <span className={styles.date}>Publicado el: { new Date(commentDate).toDateString() }</span>
              </div>
            ))
          }
          {
            Boolean(comments.length) || <h4>No hay comentarios en este momento...</h4>
          }
          <h2>Queremos saber tu opinión...</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <form onSubmit={sendComment} className={styles.commentForm}>
            <label>Tu comentario</label>
            <input className={styles.name_email} type="text" name="displayName" placeholder="Tu nombre" />
            <input className={styles.name_email} type="text" name="email" placeholder="Tu email" />
            <input type="text" name="articleId" value={articleId} hidden/>
            <textarea name="comment" placeholder="Ingresa aca tu comentario" />
            <button className={`confirm-button`}>Enviar</button>
          </form>
        </Col>
        <Modal isActive={openModal} setActive={setOpen}>
            Hey! Gracias por tu comentario, será publicado en la brevedad
        </Modal>
      </Row>
    </>
  );
}

export default CommentsSection;
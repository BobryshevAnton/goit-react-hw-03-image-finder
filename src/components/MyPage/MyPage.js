import React from 'react';
import { Component } from 'react';

import css from './myPage.module.css';

export default class MyPage extends Component {
  state = {
    arowLeft: 0,
    first: 1,
    second: 2,
    third: 3,
    end: 0,
  };

  render() {
    const { realPage, total, load } = this.props;

    const firsts = 1;
    const real = realPage;

    const endPage = Math.floor(total / 12);

    return (
      <div className={css.myPage}>
        {realPage === 1 ? (
          <button type="button" className={css.pgnBtn}>
            {realPage}
          </button>
        ) : (
          <button
            type="button"
            className={css.pgnBtn}
            onClick={() => load(realPage)}
          >
            {realPage}
          </button>
        )}
        {realPage === 1 ? (
          <button type="button" className={css.pgnBtn}>
            PREW
          </button>
        ) : (
          <button
            type="button"
            className={css.pgnBtn}
            onClick={() => load(realPage - 1)}
          >
            PREW
          </button>
        )}

        <button type="button" className={css.pgnBtn}>
          ...
        </button>

        <button
          type="button"
          className={css.pgnBtn}
          onClick={() => load(firsts + 1)}
        >
          {realPage + 1}
        </button>

        <button
          type="button"
          className={css.pgnBtn}
          onClick={() => load(firsts + 2)}
        >
          {realPage + 2}
        </button>

        <button type="button" className={css.pgnBtn}>
          ...
        </button>

        <button
          type="button"
          className={css.pgnBtn}
          onClick={() => load(endPage - 2)}
        >
          {endPage - 2}
        </button>

        <button
          type="button"
          className={css.pgnBtn}
          onClick={() => load(endPage - 1)}
        >
          {endPage - 1}
        </button>

        <button type="button" className={css.pgnBtn}>
          ...
        </button>

        {realPage === endPage ? (
          <button type="button" className={css.pgnBtn}>
            NEXT
          </button>
        ) : (
          <button
            type="button"
            className={css.pgnBtn}
            onClick={() => load(realPage + 1)}
          >
            NEXT
          </button>
        )}
        {realPage === endPage ? (
          <button type="button" className={css.pgnBtn}>
            {endPage}
          </button>
        ) : (
          <button
            type="button"
            className={css.pgnBtn}
            onClick={() => load(endPage)}
          >
            {endPage}
          </button>
        )}
      </div>
    );
  }
}

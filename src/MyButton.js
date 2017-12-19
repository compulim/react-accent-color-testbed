import React from 'react';
import { css } from 'glamor';
import { withPalette } from 'react-accent-color';

const CSS = palette => css({
  backgroundColor: palette.accent,
  color: palette.textOn.accent
});

class MyButton extends React.Component {
  render() {
    return (
      <button className={ this.props.css }>
        { this.props.children }
      </button>
    );
  }
}

export default withPalette(({ palette }) => ({
  css: CSS(palette)
}))(MyButton)

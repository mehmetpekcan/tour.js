import * as styles from "./styles";

export const OVERLAY = `
  <div class="tour--overlay-wrapper" style='${styles.OVERLAY}'></div>
`;

export const HIGHLIGHTER = `
  <div class="tour--highlighter-wrapper" style='${styles.HIGHLIGHTER}'></div>
`;

export const TOOLTIP = `
  <div class='tour--tooltip-wrapper' style='${styles.TOOLTIP}'>
    <div class='tour--tooltip-header'></div>
    <div class='tour--tooltip-body'></div>
    <div class='tour--tooltip-footer'>
      <button class='tour--tooltip-next'>
        Previous
      </button>
      <button class='tour--tooltip-next'>
        Next
      </button>
    </div>
  </div>
`;

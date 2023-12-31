import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.8);
`

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-height: 80%;
  max-width: 80%;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0, 0.2),
              0px 1px 1px 0px rgba(0,0,0, 0.14),
              0px 1px 3px 0px rgba(0,0,0, 0.12);

  background-image: url(${props => props.largeImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
export const Modal = () => {
  return (
    <>
      <div className="modal" id="modal">
        <div className="modal__success">
          <img src="./img/success/success.gif" alt="Sucesso" className="modal__success-gif" />
        </div>
        <div className="modal-content">
          <h3 className="modal__description">Compra realizada com sucesso</h3>
        </div>
      </div>

      <div className="overlay" id="overlay"></div>
    </>
  );
};

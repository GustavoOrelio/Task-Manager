import "./AddTaskDialog.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "./Button";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef();
  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen items-center justify-center bg-black/50 backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col gap-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                />
                <Input id="time" label="Horário" placeholder="Horário" />
                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button size="large" className="w-full">
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;

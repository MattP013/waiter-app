
import { Text } from "../Text";
import { Modal, TouchableOpacity, Platform } from "react-native";
import { Overlay, ModalBody, Header, Form, Input } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table:string) => void;
}
export function TableModal({visible, onClose, onSave }:TableModalProps){
  const [Table, setTable] = useState("")
  function handleSave()
  {

    onSave(Table);
    setTable('');
    onClose();
  }
  return (


        <Modal
          visible={visible}
          transparent
          animationType="fade"
        >
          <Overlay behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
            <ModalBody>
              <Header>
                <Text weight="600">Informe a mesa</Text>
                <TouchableOpacity onPress={onClose}>
                  <Close color="#666" />
                </TouchableOpacity>
              </Header>

              <Form>
                <Input
                  placeholder="Número de mesa"
                  placeholderTextColor={"#666"}
                  keyboardType="number-pad"
                  onChangeText={setTable}
                />

                <Button disabled={Table.length === 0} onPress={ () => handleSave()}>
                  Salvar
                </Button>
              </Form>
            </ModalBody>
          </Overlay>
        </Modal>
  )


}

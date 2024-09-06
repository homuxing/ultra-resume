import Image from "next/image";
import styles from "./QRCode.module.scss";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import type { QRCode } from "@/data/type";
export default function QRCode({ qrCodes }: { qrCodes: QRCode[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className={styles["qr-code"]} onClick={onOpen}>
        <Image src="/qrcode.svg" fill alt="qrcode" />
      </div>
      <Modal
        isOpen={isOpen}
        className={styles["qr-code-modal"]}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">二维码</ModalHeader>
              <ModalBody>
                <div className={styles["qr-code-modal-wrapper"]}>
                  {qrCodes.map((qrCode, index) => (
                    <div key={index} className={styles["qr-code-item"]}>
                      <Image
                        src={qrCode.src}
                        width={150}
                        height={150}
                        alt={qrCode.alt}
                      />
                      <span className="text-sm text-color-light">
                        {qrCode.alt}
                      </span>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

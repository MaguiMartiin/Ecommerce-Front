'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"

interface ModalProps {
    tittle: string,
    description: string
    isOpen: boolean,
    onClose: () => void
    children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
    tittle, description, isOpen, onClose, children  
}) =>{
    const onChange = (open: boolean) => {
        if(!open){
            onClose()
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{tittle}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>   
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}
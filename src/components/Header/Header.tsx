import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/dt-money-logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <NewTransactionButton>New transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
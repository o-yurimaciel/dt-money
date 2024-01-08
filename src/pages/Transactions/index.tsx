import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Type</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000
                                </PriceHighlight>
                            </td>
                            <td>Category</td>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td width="50%">Type</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 569,00
                                </PriceHighlight>
                            </td>
                            <td>Category</td>
                            <td>Date</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
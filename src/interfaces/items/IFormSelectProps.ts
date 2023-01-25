import ListsPageSettings from "../../classes/lists/ListsPageSettings";

/**
 * This interface represents the prop object for FormSelect component
 */
interface IFormSelectProps {
    value: string;
    onChange: (value: string) => void;
    listsSettings: ListsPageSettings;
}

export default IFormSelectProps;
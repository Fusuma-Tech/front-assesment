export default function Input({ id, placeholder, onChange }) {
    return (
        <div>
            <input
                id={id}
                className="Input-Post" 
                placeholder={placeholder} 
                onChange={onChange}>
            </input>
        </div>
    )
}
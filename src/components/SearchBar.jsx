export default function SearchBar({ input, setInput }) {
    return (
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="Search Bar" 
        />
    )
}


export default function changeValueToCpfFormat(value: string) {
	value = value.replace(/^(\d{3})(\d)/, "$1.$2");
	value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
	value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
	value = value.substring(0, 14);
	return value;
}

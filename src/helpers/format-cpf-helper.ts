export default function formatCpfHelper(value: string) {
	return value.replace(/\D/g, "");
}

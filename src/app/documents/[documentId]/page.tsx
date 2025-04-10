interface DocumentIDPageProps {
	params: Promise<{ documentId: string }>;
}

const DocumentIDPage = async ({ params }: DocumentIDPageProps) => {
	const { documentId } = await params;

	return <div>Documents ID: {documentId}</div>;
};

export default DocumentIDPage;

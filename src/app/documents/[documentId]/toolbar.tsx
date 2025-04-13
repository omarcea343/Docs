"use client";

import {
	BoldIcon,
	ChevronDownIcon,
	HighlighterIcon,
	ItalicIcon,
	ListTodoIcon,
	LucideIcon,
	MessageSquarePlusIcon,
	PrinterIcon,
	Redo2Icon,
	RemoveFormattingIcon,
	SpellCheckIcon,
	UnderlineIcon,
	Undo2Icon,
} from "lucide-react";
import { type ColorResult, TwitterPicker } from "react-color";
import { type Level } from "@tiptap/extension-heading";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const HighlightColorButton = () => {
	const { editor } = useEditorStore();

	const value = editor?.getAttributes("highlight").color || "#FFFFFF";

	const onChange = (color: ColorResult) => {
		editor?.chain().focus().setHighlight({ color: color.hex }).run();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
					<HighlighterIcon className="size-4" />
					<div className="h-0.5 w-full" style={{ backgroundColor: value }} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-0">
				<TwitterPicker
					color={value}
					onChange={onChange}
					colors={[
						"#f44336",
						"#9c27b0",
						"#673ab7",
						"#3f51b5",
						"#2196f3",
						"#03a9f4",
						"#00bcd4",
						"#009688",
						"#4caf50",
						"#8bc34a",
						"#cddc39",
						"#ffc107",
						"#ff5722",
						"#795548",
						"#607d8b",
						"#4D4D4D",
						"#999999",
						"#F44E3B",
						"#FE9200",
						"#FCDC00",
						"#DBDF00",
						"#A4DD00",
						"#68CCCA",
						"#73D8FF",
						"#AEA1FF",
						"#FDA1FF",
						"#333333",
						"#808080",
						"#cccccc",
						"#B0BC00",
						"#68BC00",
						"#16A5A5",
						"#009CE0",
						"#7B64FF",
						"#FA28FF",
						"#000000",
						"#666666",
						"#B3B3B3",
						"#9F0500",
						"#C45100",
						"#FB9E00",
						"#194D33",
						"#0C797D",
						"#653294",
						"#AB149E",
					]}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const TextColorButton = () => {
	const { editor } = useEditorStore();

	const value = editor?.getAttributes("textStyle").color || "#000000";

	const onChange = (color: ColorResult) => {
		editor?.chain().focus().setColor(color.hex).run();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
					<span className="text-xs">A</span>
					<div className="h-0.5 w-full" style={{ backgroundColor: value }} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-0">
				<TwitterPicker
					color={value}
					onChange={onChange}
					colors={[
						"#f44336",
						"#9c27b0",
						"#673ab7",
						"#3f51b5",
						"#2196f3",
						"#03a9f4",
						"#00bcd4",
						"#009688",
						"#4caf50",
						"#8bc34a",
						"#cddc39",
						"#ffc107",
						"#ff5722",
						"#795548",
						"#607d8b",
						"#4D4D4D",
						"#999999",
						"#F44E3B",
						"#FE9200",
						"#FCDC00",
						"#DBDF00",
						"#A4DD00",
						"#68CCCA",
						"#73D8FF",
						"#AEA1FF",
						"#FDA1FF",
						"#333333",
						"#808080",
						"#cccccc",
						"#B0BC00",
						"#68BC00",
						"#16A5A5",
						"#009CE0",
						"#7B64FF",
						"#FA28FF",
						"#000000",
						"#666666",
						"#B3B3B3",
						"#9F0500",
						"#C45100",
						"#FB9E00",
						"#194D33",
						"#0C797D",
						"#653294",
						"#AB149E",
					]}
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const HeadingLevelButton = () => {
	const { editor } = useEditorStore();

	const headings = [
		{ label: "Normal Text", value: 0, fontSize: "16px" },
		{ label: "Heading 1", value: 1, fontSize: "32px" },
		{ label: "Heading 2", value: 2, fontSize: "28px" },
		{ label: "Heading 3", value: 3, fontSize: "24px" },
		{ label: "Heading 4", value: 4, fontSize: "20px" },
		{ label: "Heading 5", value: 5, fontSize: "18px" },
	];

	const getCurrentHeading = () => {
		for (let level = 1; level <= 5; level++) {
			if (editor?.isActive("heading", { level })) {
				return `Heading ${level}`;
			}
		}

		return "Normal Text";
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
					<span className="truncate">{getCurrentHeading()}</span>
					<ChevronDownIcon className="ml-2 size-4 shrink-0" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1 flex flex-col gap-y-1">
				{headings.map(({ label, value, fontSize }) => (
					<button
						key={value}
						style={{ fontSize }}
						onClick={() => {
							if (value === 0) {
								editor?.chain().focus(0).setParagraph().run();
							} else {
								editor
									?.chain()
									.focus()
									.toggleHeading({ level: value as Level })
									.run();
							}
						}}
						className={cn(
							"flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
							(value === 0 && !editor?.isActive("heading")) ||
								(editor?.isActive("heading", { level: value }) && "bg-neutral-200/80")
						)}>
						{label}
					</button>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const FontFamilyButton = () => {
	const { editor } = useEditorStore();

	const font = [
		{ label: "Arial", value: "Arial" },
		{ label: "Times New Roman", value: "Times New Roman" },
		{ label: "Courier New", value: "Courier New" },
		{ label: "Georgia", value: "Georgia" },
		{ label: "Impact", value: "Impact" },
		{ label: "Tahoma", value: "Tahoma" },
		{ label: "Verdana", value: "Verdana" },
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
					<span className="truncate">{editor?.getAttributes("textStyle").fontFamily || "Arial"}</span>
					<ChevronDownIcon className="ml-2 size-4 shrink-0" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-1 flex flex-col gap-y-1">
				{font.map(({ label, value }) => (
					<button
						onClick={() => editor?.chain().focus().setFontFamily(value).run()}
						key={value}
						className={cn(
							"flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
							editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
						)}
						style={{ fontFamily: value }}>
						<span className="text-sm">{label}</span>
					</button>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

interface ToolbarButtonProps {
	onClick?: () => void;
	isActive?: boolean;
	icon: LucideIcon;
}

const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
				isActive && "bg-neutral-200/80"
			)}>
			<Icon className="size-4" />
		</button>
	);
};

export const Toolbar = () => {
	const { editor } = useEditorStore();

	const sections: { label: string; icon: LucideIcon; onClick: () => void; isActive?: boolean }[][] = [
		[
			{ label: "Undo", icon: Undo2Icon, onClick: () => editor?.chain().focus().undo().run() },
			{ label: "Redo", icon: Redo2Icon, onClick: () => editor?.chain().focus().redo().run() },
			{ label: "Print", icon: PrinterIcon, onClick: () => window.print() },
			{
				label: "Spell Check",
				icon: SpellCheckIcon,
				onClick: () => {
					const current = editor?.view.dom.getAttribute("spellcheck");
					editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
				},
			},
		],
		[
			{
				label: "Bold",
				icon: BoldIcon,
				isActive: editor?.isActive("bold"),
				onClick: () => editor?.chain().focus().toggleBold().run(),
			},
			{
				label: "Italic",
				icon: ItalicIcon,
				isActive: editor?.isActive("italic"),
				onClick: () => editor?.chain().focus().toggleItalic().run(),
			},
			{
				label: "Underline",
				icon: UnderlineIcon,
				isActive: editor?.isActive("underline"),
				onClick: () => editor?.chain().focus().toggleUnderline().run(),
			},
		],
		[
			{
				label: "Comment",
				icon: MessageSquarePlusIcon,
				onClick: () => console.log("Comment"),
				isActive: false, //TODO: Enable this functionality
			},
			{
				label: "List Todo",
				icon: ListTodoIcon,
				onClick: () => editor?.chain().focus().toggleTaskList().run(),
				isActive: editor?.isActive("taskList"),
			},
			{
				label: "Remove Formatting",
				icon: RemoveFormattingIcon,
				onClick: () => editor?.chain().focus().unsetAllMarks().run(),
			},
		],
	];

	return (
		<div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
			{sections[0].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			<FontFamilyButton />
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			<HeadingLevelButton />
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{/* TODO: Font Size */}
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{sections[1].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
			<TextColorButton />
			<HighlightColorButton />
			<Separator orientation="vertical" className="h-6 bg-neutral-300" />
			{/* TODO: Link */}
			{/* TODO: Image */}
			{/* TODO: Align */}
			{/* TODO: Line Height */}
			{/* TODO: List */}
			{sections[2].map((item) => (
				<ToolbarButton key={item.label} {...item} />
			))}
		</div>
	);
};

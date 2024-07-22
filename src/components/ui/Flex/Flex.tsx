// import { type ClassType, cn } from "@Utils/className";
// import { AriaRole, FC, ReactNode } from "react";

// type FlexElement = "div" | "section" | "article" | "aside";
// type justifyContentType =
//   | "flex-start"
//   | "flex-end"
//   | "center"
//   | "space-between"
//   | "space-around"
//   | "space-evenly";
// type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";

// type FlexProps = {
//   children: ReactNode;
//   className?: ClassType;
//   id?: string;
//   ariaLabel?: string;
//   ariaDescribedBy?: string;
//   ariaLive?: "off" | "polite" | "assertive";
//   role?: AriaRole;
//   customStyles?: string;
//   asElement?: FlexElement;
//   flexDirection?:
//   justifyContent?: justifyContentType;

//   alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
//   alignContent?:
//     | "flex-start"
//     | "flex-end"
//     | "center"
//     | "space-between"
//     | "space-around"
//     | "stretch";
// };

// type justifyProps = {
//   // eslint-disable-next-line no-unused-vars
//   [key in justifyContentType]: string;
// };

// type directionProps = {
//   // eslint-disable-next-line no-unused-vars
//   [key in FlexDirectionType]: string;
// };

// const justify: justifyProps = {
//   center: "justify-center",
//   "flex-end": "",
//   "flex-start": "",
//   "space-around": "",
//   "space-between": "",
//   "space-evenly": "",
// };

// const direction: directionProps = {};

// /**
//  * Flex component for creating flexible and responsive layouts with performance and SEO optimizations.
//  *
//  * The Flex component renders a specified block-level HTML element with flexbox styling
//  * and optional attributes to improve accessibility and SEO. It supports custom styling
//  * and provides additional attributes such as `id`, `aria-label`, `aria-describedby`,
//  * and `aria-live` to enhance accessibility. The component allows for flexible layout options
//  * with properties like `flexDirection`, `justifyContent`, `alignItems`, and `alignContent`.
//  *
//  * @param {FlexProps} props - The props for the Flex component.
//  * @param {ReactNode} props.children - The content to be wrapped by the flex container.
//  * @param {ClassType} [props.className] - Additional class names to apply to the flex container.
//  * @param {string} [props.id] - Optional ID for the flex container, useful for CSS or JavaScript targeting.
//  * @param {string} [props.ariaLabel] - Optional ARIA label for the flex container to improve accessibility.
//  * @param {string} [props.ariaDescribedBy] - Optional ARIA described-by ID to provide more context.
//  * @param {"off" | "polite" | "assertive"} [props.ariaLive] - Optional ARIA live region settings for dynamic content updates.
//  * @param {AriaRole} [props.role] - The ARIA role to apply for accessibility. Defaults to "region".
//  * @param {string} [props.customStyles] - Additional custom styles to apply inline.
//  * @param {FlexElement} [props.asElement] - The HTML element to use for the flex container. Defaults to "div".
//  * @param {"row" | "row-reverse" | "column" | "column-reverse"} [props.flexDirection] - Defines the direction of flex items.
//  * @param {"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"} [props.justifyContent] - Defines the alignment along the main axis.
//  * @param {"flex-start" | "flex-end" | "center" | "baseline" | "stretch"} [props.alignItems] - Defines the alignment along the cross axis.
//  * @param {"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"} [props.alignContent] - Defines the alignment of flex lines.
//  *
//  * @returns {JSX.Element} The rendered flex container component.
//  *
//  * @example
//  * // Basic usage
//  * <Flex flexDirection="row" justifyContent="center" alignItems="center">
//  *   <p>Your content here</p>
//  * </Flex>
//  *
//  * @example
//  * // With custom ID, ARIA attributes, and styles
//  * <Flex
//  *   id="unique-id"
//  *   ariaLabel="Description of the flex container"
//  *   ariaDescribedBy="description-id"
//  *   ariaLive="polite"
//  *   role="region"
//  *   customStyles="background-color: #f0f0f0; padding: 16px;"
//  *   flexDirection="column"
//  *   justifyContent="space-around"
//  * >
//  *   <h2>Header</h2>
//  *   <p>Content with additional attributes and custom styles</p>
//  * </Flex>
//  *
//  * @example
//  * // Using a different HTML element
//  * <Flex asElement="section">
//  *   <h2>Section Header</h2>
//  *   <p>Content inside a section element with flex layout</p>
//  * </Flex>
//  */
// const Flex: FC<FlexProps> = ({
//   children,
//   className,
//   id,
//   ariaLabel,
//   ariaDescribedBy,
//   ariaLive,
//   role = "region",
//   asElement: Element = "div",
//   flexDirection,
//   justifyContent,
//   alignItems,
//   alignContent,
//   ...rest
// }) => (
//   <Element
//     id={id}
//     aria-label={ariaLabel}
//     aria-describedby={ariaDescribedBy}
//     aria-live={ariaLive}
//     role={role}
//     className={cn(
//       "flex",
//       justify[(justifyContent as keyof justifyProps) ?? ""],
//       //   `${flexDirection ?? ""}`,
//       //   `${justifyContent ?? ""}`,
//       //   `${alignItems ?? ""}`,
//       //   `${alignContent ?? ""}`,
//       className
//     )}
//     {...rest}
//   >
//     {children}
//   </Element>
// );

// export { type FlexProps };
// export default Flex;

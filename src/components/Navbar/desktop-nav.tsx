import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from "@chakra-ui/react";

import { NAV_ITEMS } from "./nav-itens";
import { DesktopSubNav } from "./desktop-sub-nav";

interface ElementWithOffsetTop extends Element {
  offsetTop: number;
}

export const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const scrollToElement = (id: string) => {
    const target = document.getElementById(id) as ElementWithOffsetTop;
    if (target) {
      window.scrollTo({
        top: target.offsetTop + 200, //TODO: Testar quando o componentes estiverm funcionando se Subtrai a altura do cabeçalho
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack direction={"row"} align="flex-end" h="100%" spacing={10} mr={"9rem"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                onClick={() => scrollToElement(navItem.href ?? "#")}
                fontSize={"sm"}
                fontWeight={800}
                color={"white"}
                isExternal={!Boolean(navItem.href && navItem.href.indexOf("/"))}
                _hover={{
                  textDecoration: "none",
                  color: "primary",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

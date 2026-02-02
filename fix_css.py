import os

def fix_css():
    print("Reading style.css...")
    try:
        with open('style.css', 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    print(f"Total lines read: {len(lines)}")

    # Find the footer block
    footer_line_idx = -1
    for i in range(len(lines)):
        # Look for the specific footer block signature
        if 'footer {' in lines[i]:
            # check for nearby signatures to be sure
            # checking next few lines safely
            context = "".join(lines[i:i+4])
            if 'padding-top: 5px;' in context:
                footer_line_idx = i
                print(f"Found footer block at line {i+1}")
                break
    
    if footer_line_idx == -1:
        print("Could not find footer block. Aborting to avoid damage.")
        return

    # We want to keep lines up to the closing brace of this footer block.
    # Based on observation, the closing brace is a few lines down.
    cutoff_idx = -1
    for i in range(footer_line_idx, min(footer_line_idx + 10, len(lines))):
        if '}' in lines[i]:
            cutoff_idx = i
            print(f"Found closing brace at line {i+1}: {lines[i].strip()[:20]}...")
            break
            
    if cutoff_idx == -1:
        print("Could not find closing brace. Aborting.")
        return

    # Clean the line with the brace (remove anything after })
    brace_line = lines[cutoff_idx]
    brace_pos = brace_line.find('}')
    cleaned_brace_line = brace_line[:brace_pos+1] + '\n'
    
    # Construct new content
    final_lines = lines[:cutoff_idx]
    final_lines.append(cleaned_brace_line)
    
    print("Writing fixed style.css...")
    with open('style.css', 'w', encoding='utf-8') as f:
        f.writelines(final_lines)
        f.write('\n\n')
        # Append responsive snippet
        if os.path.exists('style.css_responsive_snippet'):
            with open('style.css_responsive_snippet', 'r', encoding='utf-8') as snippet:
                f.write(snippet.read())
            print("Appended style.css_responsive_snippet")
        else:
            print("Warning: style.css_responsive_snippet not found!")
    
    print("Fix complete.")

if __name__ == '__main__':
    fix_css()

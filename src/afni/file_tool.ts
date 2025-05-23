// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FILE_TOOL_METADATA: Metadata = {
    id: "3be01685ddee430df908b2cebb65205e7abd55ae.boutiques",
    name: "file_tool",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface FileToolParameters {
    "__STYXTYPE__": "file_tool";
    "help": boolean;
    "version": boolean;
    "hist": boolean;
    "debug"?: number | null | undefined;
    "infiles": Array<InputPathType>;
    "ge_all": boolean;
    "ge_header": boolean;
    "ge_extras": boolean;
    "ge_uv17": boolean;
    "ge_run": boolean;
    "ge_off": boolean;
    "ge4_all": boolean;
    "ge4_image": boolean;
    "ge4_series": boolean;
    "ge4_study": boolean;
    "def_ana_hdr": boolean;
    "diff_ana_hdrs": boolean;
    "disp_ana_hdr": boolean;
    "hex": boolean;
    "mod_ana_hdr": boolean;
    "mod_field"?: string | null | undefined;
    "prefix"?: string | null | undefined;
    "overwrite": boolean;
    "show_bad_all": boolean;
    "show_bad_backslash": boolean;
    "show_bad_char": boolean;
    "show_file_type": boolean;
    "fix_rich_quotes"?: string | null | undefined;
    "test": boolean;
    "length"?: number | null | undefined;
    "mod_data"?: string | null | undefined;
    "mod_type"?: string | null | undefined;
    "offset"?: number | null | undefined;
    "quiet": boolean;
    "disp_hex": boolean;
    "disp_hex1": boolean;
    "disp_hex2": boolean;
    "disp_hex4": boolean;
    "disp_int2": boolean;
    "disp_int4": boolean;
    "disp_real4": boolean;
    "swap_bytes": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "file_tool": file_tool_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "file_tool": file_tool_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `file_tool(...)`.
 *
 * @interface
 */
interface FileToolOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The modified output file
     */
    modified_file: OutputPathType | null;
}


function file_tool_params(
    infiles: Array<InputPathType>,
    help: boolean = false,
    version: boolean = false,
    hist: boolean = false,
    debug: number | null = null,
    ge_all: boolean = false,
    ge_header: boolean = false,
    ge_extras: boolean = false,
    ge_uv17: boolean = false,
    ge_run: boolean = false,
    ge_off: boolean = false,
    ge4_all: boolean = false,
    ge4_image: boolean = false,
    ge4_series: boolean = false,
    ge4_study: boolean = false,
    def_ana_hdr: boolean = false,
    diff_ana_hdrs: boolean = false,
    disp_ana_hdr: boolean = false,
    hex: boolean = false,
    mod_ana_hdr: boolean = false,
    mod_field: string | null = null,
    prefix: string | null = null,
    overwrite: boolean = false,
    show_bad_all: boolean = false,
    show_bad_backslash: boolean = false,
    show_bad_char: boolean = false,
    show_file_type: boolean = false,
    fix_rich_quotes: string | null = null,
    test: boolean = false,
    length: number | null = null,
    mod_data: string | null = null,
    mod_type: string | null = null,
    offset: number | null = null,
    quiet: boolean = false,
    disp_hex: boolean = false,
    disp_hex1: boolean = false,
    disp_hex2: boolean = false,
    disp_hex4: boolean = false,
    disp_int2: boolean = false,
    disp_int4: boolean = false,
    disp_real4: boolean = false,
    swap_bytes: boolean = false,
): FileToolParameters {
    /**
     * Build parameters.
    
     * @param infiles Specify input files to display or modify
     * @param help Show help information
     * @param version Show version information
     * @param hist Show the program's modification history
     * @param debug Print extra info along the way, default is 0, max is 2
     * @param ge_all Display GE header and extras info
     * @param ge_header Display GE header info
     * @param ge_extras Display extra GE image info
     * @param ge_uv17 Display the value of uv17 (the run #)
     * @param ge_run Display the value of uv17 (the run #)
     * @param ge_off Display file offsets for various fields
     * @param ge4_all Display GEMS 4.x series and image headers
     * @param ge4_image Display GEMS 4.x image header
     * @param ge4_series Display GEMS 4.x series header
     * @param ge4_study Display GEMS 4.x study header
     * @param def_ana_hdr Display the definition of an ANALYZE header
     * @param diff_ana_hdrs Display field differences between 2 headers
     * @param disp_ana_hdr Display ANALYZE headers
     * @param hex Display field values in hexadecimal
     * @param mod_ana_hdr Modify ANALYZE headers
     * @param mod_field Specify a field and value(s) to modify
     * @param prefix Specify an output filename
     * @param overwrite Specify to overwrite the input file(s)
     * @param show_bad_all Show lines with whitespace after '\'
     * @param show_bad_backslash Show lines with whitespace after '\'
     * @param show_bad_char Show any non-printable characters
     * @param show_file_type Print file type of UNIX, Mac or DOS
     * @param fix_rich_quotes Replace rich-text quotes with ASCII
     * @param test Short for -show_bad_all. Check script files for known issues
     * @param length Specify the number of bytes to print/modify
     * @param mod_data Specify a string to modify the data to
     * @param mod_type Specify the data type to write to the file
     * @param offset Specify the offset into each file
     * @param quiet Do not output header information
     * @param disp_hex Display bytes in hex
     * @param disp_hex1 Display bytes in hex
     * @param disp_hex2 Display 2-byte integers in hex
     * @param disp_hex4 Display 4-byte integers in hex
     * @param disp_int2 Display 2-byte integers
     * @param disp_int4 Display 4-byte integers
     * @param disp_real4 Display 4-byte real numbers
     * @param swap_bytes Use byte-swapping on numbers
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "file_tool" as const,
        "help": help,
        "version": version,
        "hist": hist,
        "infiles": infiles,
        "ge_all": ge_all,
        "ge_header": ge_header,
        "ge_extras": ge_extras,
        "ge_uv17": ge_uv17,
        "ge_run": ge_run,
        "ge_off": ge_off,
        "ge4_all": ge4_all,
        "ge4_image": ge4_image,
        "ge4_series": ge4_series,
        "ge4_study": ge4_study,
        "def_ana_hdr": def_ana_hdr,
        "diff_ana_hdrs": diff_ana_hdrs,
        "disp_ana_hdr": disp_ana_hdr,
        "hex": hex,
        "mod_ana_hdr": mod_ana_hdr,
        "overwrite": overwrite,
        "show_bad_all": show_bad_all,
        "show_bad_backslash": show_bad_backslash,
        "show_bad_char": show_bad_char,
        "show_file_type": show_file_type,
        "test": test,
        "quiet": quiet,
        "disp_hex": disp_hex,
        "disp_hex1": disp_hex1,
        "disp_hex2": disp_hex2,
        "disp_hex4": disp_hex4,
        "disp_int2": disp_int2,
        "disp_int4": disp_int4,
        "disp_real4": disp_real4,
        "swap_bytes": swap_bytes,
    };
    if (debug !== null) {
        params["debug"] = debug;
    }
    if (mod_field !== null) {
        params["mod_field"] = mod_field;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (fix_rich_quotes !== null) {
        params["fix_rich_quotes"] = fix_rich_quotes;
    }
    if (length !== null) {
        params["length"] = length;
    }
    if (mod_data !== null) {
        params["mod_data"] = mod_data;
    }
    if (mod_type !== null) {
        params["mod_type"] = mod_type;
    }
    if (offset !== null) {
        params["offset"] = offset;
    }
    return params;
}


function file_tool_cargs(
    params: FileToolParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("file_tool");
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    if ((params["hist"] ?? null)) {
        cargs.push("-hist");
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    cargs.push(
        "-infiles",
        ...(params["infiles"] ?? null).map(f => execution.inputFile(f))
    );
    if ((params["ge_all"] ?? null)) {
        cargs.push("-ge_all");
    }
    if ((params["ge_header"] ?? null)) {
        cargs.push("-ge_header");
    }
    if ((params["ge_extras"] ?? null)) {
        cargs.push("-ge_extras");
    }
    if ((params["ge_uv17"] ?? null)) {
        cargs.push("-ge_uv17");
    }
    if ((params["ge_run"] ?? null)) {
        cargs.push("-ge_run");
    }
    if ((params["ge_off"] ?? null)) {
        cargs.push("-ge_off");
    }
    if ((params["ge4_all"] ?? null)) {
        cargs.push("-ge4_all");
    }
    if ((params["ge4_image"] ?? null)) {
        cargs.push("-ge4_image");
    }
    if ((params["ge4_series"] ?? null)) {
        cargs.push("-ge4_series");
    }
    if ((params["ge4_study"] ?? null)) {
        cargs.push("-ge4_study");
    }
    if ((params["def_ana_hdr"] ?? null)) {
        cargs.push("-def_ana_hdr");
    }
    if ((params["diff_ana_hdrs"] ?? null)) {
        cargs.push("-diff_ana_hdrs");
    }
    if ((params["disp_ana_hdr"] ?? null)) {
        cargs.push("-disp_ana_hdr");
    }
    if ((params["hex"] ?? null)) {
        cargs.push("-hex");
    }
    if ((params["mod_ana_hdr"] ?? null)) {
        cargs.push("-mod_ana_hdr");
    }
    if ((params["mod_field"] ?? null) !== null) {
        cargs.push(
            "-mod_field",
            (params["mod_field"] ?? null)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["show_bad_all"] ?? null)) {
        cargs.push("-show_bad_all");
    }
    if ((params["show_bad_backslash"] ?? null)) {
        cargs.push("-show_bad_backslash");
    }
    if ((params["show_bad_char"] ?? null)) {
        cargs.push("-show_bad_char");
    }
    if ((params["show_file_type"] ?? null)) {
        cargs.push("-show_file_type");
    }
    if ((params["fix_rich_quotes"] ?? null) !== null) {
        cargs.push(
            "-fix_rich_quotes",
            (params["fix_rich_quotes"] ?? null)
        );
    }
    if ((params["test"] ?? null)) {
        cargs.push("-test");
    }
    if ((params["length"] ?? null) !== null) {
        cargs.push(
            "-length",
            String((params["length"] ?? null))
        );
    }
    if ((params["mod_data"] ?? null) !== null) {
        cargs.push(
            "-mod_data",
            (params["mod_data"] ?? null)
        );
    }
    if ((params["mod_type"] ?? null) !== null) {
        cargs.push(
            "-mod_type",
            (params["mod_type"] ?? null)
        );
    }
    if ((params["offset"] ?? null) !== null) {
        cargs.push(
            "-offset",
            String((params["offset"] ?? null))
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["disp_hex"] ?? null)) {
        cargs.push("-disp_hex");
    }
    if ((params["disp_hex1"] ?? null)) {
        cargs.push("-disp_hex1");
    }
    if ((params["disp_hex2"] ?? null)) {
        cargs.push("-disp_hex2");
    }
    if ((params["disp_hex4"] ?? null)) {
        cargs.push("-disp_hex4");
    }
    if ((params["disp_int2"] ?? null)) {
        cargs.push("-disp_int2");
    }
    if ((params["disp_int4"] ?? null)) {
        cargs.push("-disp_int4");
    }
    if ((params["disp_real4"] ?? null)) {
        cargs.push("-disp_real4");
    }
    if ((params["swap_bytes"] ?? null)) {
        cargs.push("-swap_bytes");
    }
    return cargs;
}


function file_tool_outputs(
    params: FileToolParameters,
    execution: Execution,
): FileToolOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FileToolOutputs = {
        root: execution.outputFile("."),
        modified_file: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null)].join('')) : null,
    };
    return ret;
}


function file_tool_execute(
    params: FileToolParameters,
    execution: Execution,
): FileToolOutputs {
    /**
     * Program to display or modify sections of a file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FileToolOutputs`).
     */
    params = execution.params(params)
    const cargs = file_tool_cargs(params, execution)
    const ret = file_tool_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function file_tool(
    infiles: Array<InputPathType>,
    help: boolean = false,
    version: boolean = false,
    hist: boolean = false,
    debug: number | null = null,
    ge_all: boolean = false,
    ge_header: boolean = false,
    ge_extras: boolean = false,
    ge_uv17: boolean = false,
    ge_run: boolean = false,
    ge_off: boolean = false,
    ge4_all: boolean = false,
    ge4_image: boolean = false,
    ge4_series: boolean = false,
    ge4_study: boolean = false,
    def_ana_hdr: boolean = false,
    diff_ana_hdrs: boolean = false,
    disp_ana_hdr: boolean = false,
    hex: boolean = false,
    mod_ana_hdr: boolean = false,
    mod_field: string | null = null,
    prefix: string | null = null,
    overwrite: boolean = false,
    show_bad_all: boolean = false,
    show_bad_backslash: boolean = false,
    show_bad_char: boolean = false,
    show_file_type: boolean = false,
    fix_rich_quotes: string | null = null,
    test: boolean = false,
    length: number | null = null,
    mod_data: string | null = null,
    mod_type: string | null = null,
    offset: number | null = null,
    quiet: boolean = false,
    disp_hex: boolean = false,
    disp_hex1: boolean = false,
    disp_hex2: boolean = false,
    disp_hex4: boolean = false,
    disp_int2: boolean = false,
    disp_int4: boolean = false,
    disp_real4: boolean = false,
    swap_bytes: boolean = false,
    runner: Runner | null = null,
): FileToolOutputs {
    /**
     * Program to display or modify sections of a file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infiles Specify input files to display or modify
     * @param help Show help information
     * @param version Show version information
     * @param hist Show the program's modification history
     * @param debug Print extra info along the way, default is 0, max is 2
     * @param ge_all Display GE header and extras info
     * @param ge_header Display GE header info
     * @param ge_extras Display extra GE image info
     * @param ge_uv17 Display the value of uv17 (the run #)
     * @param ge_run Display the value of uv17 (the run #)
     * @param ge_off Display file offsets for various fields
     * @param ge4_all Display GEMS 4.x series and image headers
     * @param ge4_image Display GEMS 4.x image header
     * @param ge4_series Display GEMS 4.x series header
     * @param ge4_study Display GEMS 4.x study header
     * @param def_ana_hdr Display the definition of an ANALYZE header
     * @param diff_ana_hdrs Display field differences between 2 headers
     * @param disp_ana_hdr Display ANALYZE headers
     * @param hex Display field values in hexadecimal
     * @param mod_ana_hdr Modify ANALYZE headers
     * @param mod_field Specify a field and value(s) to modify
     * @param prefix Specify an output filename
     * @param overwrite Specify to overwrite the input file(s)
     * @param show_bad_all Show lines with whitespace after '\'
     * @param show_bad_backslash Show lines with whitespace after '\'
     * @param show_bad_char Show any non-printable characters
     * @param show_file_type Print file type of UNIX, Mac or DOS
     * @param fix_rich_quotes Replace rich-text quotes with ASCII
     * @param test Short for -show_bad_all. Check script files for known issues
     * @param length Specify the number of bytes to print/modify
     * @param mod_data Specify a string to modify the data to
     * @param mod_type Specify the data type to write to the file
     * @param offset Specify the offset into each file
     * @param quiet Do not output header information
     * @param disp_hex Display bytes in hex
     * @param disp_hex1 Display bytes in hex
     * @param disp_hex2 Display 2-byte integers in hex
     * @param disp_hex4 Display 4-byte integers in hex
     * @param disp_int2 Display 2-byte integers
     * @param disp_int4 Display 4-byte integers
     * @param disp_real4 Display 4-byte real numbers
     * @param swap_bytes Use byte-swapping on numbers
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FileToolOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FILE_TOOL_METADATA);
    const params = file_tool_params(infiles, help, version, hist, debug, ge_all, ge_header, ge_extras, ge_uv17, ge_run, ge_off, ge4_all, ge4_image, ge4_series, ge4_study, def_ana_hdr, diff_ana_hdrs, disp_ana_hdr, hex, mod_ana_hdr, mod_field, prefix, overwrite, show_bad_all, show_bad_backslash, show_bad_char, show_file_type, fix_rich_quotes, test, length, mod_data, mod_type, offset, quiet, disp_hex, disp_hex1, disp_hex2, disp_hex4, disp_int2, disp_int4, disp_real4, swap_bytes)
    return file_tool_execute(params, execution);
}


export {
      FILE_TOOL_METADATA,
      FileToolOutputs,
      FileToolParameters,
      file_tool,
      file_tool_params,
};

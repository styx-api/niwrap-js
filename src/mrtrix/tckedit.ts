// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TCKEDIT_METADATA: Metadata = {
    id: "4801e80a5f4cd98d36e936529b299d462d8c2b8d.boutiques",
    name: "tckedit",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TckeditVariousStringParameters {
    "__STYXTYPE__": "VariousString";
    "obj": string;
}


interface TckeditVariousFileParameters {
    "__STYXTYPE__": "VariousFile";
    "obj": InputPathType;
}


interface TckeditIncludeParameters {
    "__STYXTYPE__": "include";
    "spec": TckeditVariousStringParameters | TckeditVariousFileParameters;
}


interface TckeditIncludeOrderedParameters {
    "__STYXTYPE__": "include_ordered";
    "image": string;
}


interface TckeditVariousString1Parameters {
    "__STYXTYPE__": "VariousString_1";
    "obj": string;
}


interface TckeditVariousFile1Parameters {
    "__STYXTYPE__": "VariousFile_1";
    "obj": InputPathType;
}


interface TckeditExcludeParameters {
    "__STYXTYPE__": "exclude";
    "spec": TckeditVariousString1Parameters | TckeditVariousFile1Parameters;
}


interface TckeditVariousString2Parameters {
    "__STYXTYPE__": "VariousString_2";
    "obj": string;
}


interface TckeditVariousFile2Parameters {
    "__STYXTYPE__": "VariousFile_2";
    "obj": InputPathType;
}


interface TckeditMaskParameters {
    "__STYXTYPE__": "mask";
    "spec": TckeditVariousString2Parameters | TckeditVariousFile2Parameters;
}


interface TckeditConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TckeditParameters {
    "__STYXTYPE__": "tckedit";
    "include"?: Array<TckeditIncludeParameters> | null | undefined;
    "include_ordered"?: Array<TckeditIncludeOrderedParameters> | null | undefined;
    "exclude"?: Array<TckeditExcludeParameters> | null | undefined;
    "mask"?: Array<TckeditMaskParameters> | null | undefined;
    "maxlength"?: number | null | undefined;
    "minlength"?: number | null | undefined;
    "number"?: number | null | undefined;
    "skip"?: number | null | undefined;
    "maxweight"?: number | null | undefined;
    "minweight"?: number | null | undefined;
    "inverse": boolean;
    "ends_only": boolean;
    "tck_weights_in"?: InputPathType | null | undefined;
    "tck_weights_out"?: string | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TckeditConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "tracks_in": Array<InputPathType>;
    "tracks_out": string;
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
        "tckedit": tckedit_cargs,
        "include": tckedit_include_cargs,
        "VariousString": tckedit_various_string_cargs,
        "VariousFile": tckedit_various_file_cargs,
        "include_ordered": tckedit_include_ordered_cargs,
        "exclude": tckedit_exclude_cargs,
        "VariousString_1": tckedit_various_string_1_cargs,
        "VariousFile_1": tckedit_various_file_1_cargs,
        "mask": tckedit_mask_cargs,
        "VariousString_2": tckedit_various_string_2_cargs,
        "VariousFile_2": tckedit_various_file_2_cargs,
        "config": tckedit_config_cargs,
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
        "tckedit": tckedit_outputs,
    };
    return outputsFuncs[t];
}


function tckedit_various_string_params(
    obj: string,
): TckeditVariousStringParameters {
    /**
     * Build parameters.
    
     * @param obj String object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousString" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_string_cargs(
    params: TckeditVariousStringParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push((params["obj"] ?? null));
    return cargs;
}


function tckedit_various_file_params(
    obj: InputPathType,
): TckeditVariousFileParameters {
    /**
     * Build parameters.
    
     * @param obj File object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousFile" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_file_cargs(
    params: TckeditVariousFileParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(execution.inputFile((params["obj"] ?? null)));
    return cargs;
}


function tckedit_include_params(
    spec: TckeditVariousStringParameters | TckeditVariousFileParameters,
): TckeditIncludeParameters {
    /**
     * Build parameters.
    
     * @param spec specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion regions to be accepted.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "include" as const,
        "spec": spec,
    };
    return params;
}


function tckedit_include_cargs(
    params: TckeditIncludeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-include");
    cargs.push(...dynCargs((params["spec"] ?? null).__STYXTYPE__)((params["spec"] ?? null), execution));
    return cargs;
}


function tckedit_include_ordered_params(
    image: string,
): TckeditIncludeOrderedParameters {
    /**
     * Build parameters.
    
     * @param image specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion_ordered regions in the order they are specified in order to be accepted.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "include_ordered" as const,
        "image": image,
    };
    return params;
}


function tckedit_include_ordered_cargs(
    params: TckeditIncludeOrderedParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-include_ordered");
    cargs.push((params["image"] ?? null));
    return cargs;
}


function tckedit_various_string_1_params(
    obj: string,
): TckeditVariousString1Parameters {
    /**
     * Build parameters.
    
     * @param obj String object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousString_1" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_string_1_cargs(
    params: TckeditVariousString1Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push((params["obj"] ?? null));
    return cargs;
}


function tckedit_various_file_1_params(
    obj: InputPathType,
): TckeditVariousFile1Parameters {
    /**
     * Build parameters.
    
     * @param obj File object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousFile_1" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_file_1_cargs(
    params: TckeditVariousFile1Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(execution.inputFile((params["obj"] ?? null)));
    return cargs;
}


function tckedit_exclude_params(
    spec: TckeditVariousString1Parameters | TckeditVariousFile1Parameters,
): TckeditExcludeParameters {
    /**
     * Build parameters.
    
     * @param spec specify an exclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines that enter ANY exclude region will be discarded.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "exclude" as const,
        "spec": spec,
    };
    return params;
}


function tckedit_exclude_cargs(
    params: TckeditExcludeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-exclude");
    cargs.push(...dynCargs((params["spec"] ?? null).__STYXTYPE__)((params["spec"] ?? null), execution));
    return cargs;
}


function tckedit_various_string_2_params(
    obj: string,
): TckeditVariousString2Parameters {
    /**
     * Build parameters.
    
     * @param obj String object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousString_2" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_string_2_cargs(
    params: TckeditVariousString2Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push((params["obj"] ?? null));
    return cargs;
}


function tckedit_various_file_2_params(
    obj: InputPathType,
): TckeditVariousFile2Parameters {
    /**
     * Build parameters.
    
     * @param obj File object.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "VariousFile_2" as const,
        "obj": obj,
    };
    return params;
}


function tckedit_various_file_2_cargs(
    params: TckeditVariousFile2Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(execution.inputFile((params["obj"] ?? null)));
    return cargs;
}


function tckedit_mask_params(
    spec: TckeditVariousString2Parameters | TckeditVariousFile2Parameters,
): TckeditMaskParameters {
    /**
     * Build parameters.
    
     * @param spec specify a masking region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). If defined, streamlines exiting the mask will be truncated.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mask" as const,
        "spec": spec,
    };
    return params;
}


function tckedit_mask_cargs(
    params: TckeditMaskParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-mask");
    cargs.push(...dynCargs((params["spec"] ?? null).__STYXTYPE__)((params["spec"] ?? null), execution));
    return cargs;
}


function tckedit_config_params(
    key: string,
    value: string,
): TckeditConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function tckedit_config_cargs(
    params: TckeditConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `tckedit(...)`.
 *
 * @interface
 */
interface TckeditOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output track file
     */
    tracks_out: OutputPathType;
    /**
     * specify the path for an output text scalar file containing streamline weights 
     */
    tck_weights_out: OutputPathType | null;
}


function tckedit_params(
    tracks_in: Array<InputPathType>,
    tracks_out: string,
    include: Array<TckeditIncludeParameters> | null = null,
    include_ordered: Array<TckeditIncludeOrderedParameters> | null = null,
    exclude: Array<TckeditExcludeParameters> | null = null,
    mask: Array<TckeditMaskParameters> | null = null,
    maxlength: number | null = null,
    minlength: number | null = null,
    number_: number | null = null,
    skip: number | null = null,
    maxweight: number | null = null,
    minweight: number | null = null,
    inverse: boolean = false,
    ends_only: boolean = false,
    tck_weights_in: InputPathType | null = null,
    tck_weights_out: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckeditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TckeditParameters {
    /**
     * Build parameters.
    
     * @param tracks_in the input track file(s)
     * @param tracks_out the output track file
     * @param include specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion regions to be accepted.
     * @param include_ordered specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion_ordered regions in the order they are specified in order to be accepted.
     * @param exclude specify an exclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines that enter ANY exclude region will be discarded.
     * @param mask specify a masking region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). If defined, streamlines exiting the mask will be truncated.
     * @param maxlength set the maximum length of any streamline in mm
     * @param minlength set the minimum length of any streamline in mm
     * @param number_ set the desired number of selected streamlines to be propagated to the output file
     * @param skip omit this number of selected streamlines before commencing writing to the output file
     * @param maxweight set the maximum weight of any streamline
     * @param minweight set the minimum weight of any streamline
     * @param inverse output the inverse selection of streamlines based on the criteria provided; i.e. only those streamlines that fail at least one selection criterion, and/or vertices that are outside masks if provided, will be written to file
     * @param ends_only only test the ends of each streamline against the provided include/exclude ROIs
     * @param tck_weights_in specify a text scalar file containing the streamline weights
     * @param tck_weights_out specify the path for an output text scalar file containing streamline weights
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tckedit" as const,
        "inverse": inverse,
        "ends_only": ends_only,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "tracks_in": tracks_in,
        "tracks_out": tracks_out,
    };
    if (include !== null) {
        params["include"] = include;
    }
    if (include_ordered !== null) {
        params["include_ordered"] = include_ordered;
    }
    if (exclude !== null) {
        params["exclude"] = exclude;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (maxlength !== null) {
        params["maxlength"] = maxlength;
    }
    if (minlength !== null) {
        params["minlength"] = minlength;
    }
    if (number_ !== null) {
        params["number"] = number_;
    }
    if (skip !== null) {
        params["skip"] = skip;
    }
    if (maxweight !== null) {
        params["maxweight"] = maxweight;
    }
    if (minweight !== null) {
        params["minweight"] = minweight;
    }
    if (tck_weights_in !== null) {
        params["tck_weights_in"] = tck_weights_in;
    }
    if (tck_weights_out !== null) {
        params["tck_weights_out"] = tck_weights_out;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tckedit_cargs(
    params: TckeditParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tckedit");
    if ((params["include"] ?? null) !== null) {
        cargs.push(...(params["include"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["include_ordered"] ?? null) !== null) {
        cargs.push(...(params["include_ordered"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["exclude"] ?? null) !== null) {
        cargs.push(...(params["exclude"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(...(params["mask"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["maxlength"] ?? null) !== null) {
        cargs.push(
            "-maxlength",
            String((params["maxlength"] ?? null))
        );
    }
    if ((params["minlength"] ?? null) !== null) {
        cargs.push(
            "-minlength",
            String((params["minlength"] ?? null))
        );
    }
    if ((params["number"] ?? null) !== null) {
        cargs.push(
            "-number",
            String((params["number"] ?? null))
        );
    }
    if ((params["skip"] ?? null) !== null) {
        cargs.push(
            "-skip",
            String((params["skip"] ?? null))
        );
    }
    if ((params["maxweight"] ?? null) !== null) {
        cargs.push(
            "-maxweight",
            String((params["maxweight"] ?? null))
        );
    }
    if ((params["minweight"] ?? null) !== null) {
        cargs.push(
            "-minweight",
            String((params["minweight"] ?? null))
        );
    }
    if ((params["inverse"] ?? null)) {
        cargs.push("-inverse");
    }
    if ((params["ends_only"] ?? null)) {
        cargs.push("-ends_only");
    }
    if ((params["tck_weights_in"] ?? null) !== null) {
        cargs.push(
            "-tck_weights_in",
            execution.inputFile((params["tck_weights_in"] ?? null))
        );
    }
    if ((params["tck_weights_out"] ?? null) !== null) {
        cargs.push(
            "-tck_weights_out",
            (params["tck_weights_out"] ?? null)
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(...(params["tracks_in"] ?? null).map(f => execution.inputFile(f)));
    cargs.push((params["tracks_out"] ?? null));
    return cargs;
}


function tckedit_outputs(
    params: TckeditParameters,
    execution: Execution,
): TckeditOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TckeditOutputs = {
        root: execution.outputFile("."),
        tracks_out: execution.outputFile([(params["tracks_out"] ?? null)].join('')),
        tck_weights_out: ((params["tck_weights_out"] ?? null) !== null) ? execution.outputFile([(params["tck_weights_out"] ?? null)].join('')) : null,
    };
    return ret;
}


function tckedit_execute(
    params: TckeditParameters,
    execution: Execution,
): TckeditOutputs {
    /**
     * Perform various editing operations on track files.
     * 
     * This command can be used to perform various types of manipulations on track data. A range of such manipulations are demonstrated in the examples provided below.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TckeditOutputs`).
     */
    params = execution.params(params)
    const cargs = tckedit_cargs(params, execution)
    const ret = tckedit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tckedit(
    tracks_in: Array<InputPathType>,
    tracks_out: string,
    include: Array<TckeditIncludeParameters> | null = null,
    include_ordered: Array<TckeditIncludeOrderedParameters> | null = null,
    exclude: Array<TckeditExcludeParameters> | null = null,
    mask: Array<TckeditMaskParameters> | null = null,
    maxlength: number | null = null,
    minlength: number | null = null,
    number_: number | null = null,
    skip: number | null = null,
    maxweight: number | null = null,
    minweight: number | null = null,
    inverse: boolean = false,
    ends_only: boolean = false,
    tck_weights_in: InputPathType | null = null,
    tck_weights_out: string | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TckeditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TckeditOutputs {
    /**
     * Perform various editing operations on track files.
     * 
     * This command can be used to perform various types of manipulations on track data. A range of such manipulations are demonstrated in the examples provided below.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param tracks_in the input track file(s)
     * @param tracks_out the output track file
     * @param include specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion regions to be accepted.
     * @param include_ordered specify an inclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines must traverse ALL inclusion_ordered regions in the order they are specified in order to be accepted.
     * @param exclude specify an exclusion region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). Streamlines that enter ANY exclude region will be discarded.
     * @param mask specify a masking region of interest, as either a binary mask image, or as a sphere using 4 comma-separared values (x,y,z,radius). If defined, streamlines exiting the mask will be truncated.
     * @param maxlength set the maximum length of any streamline in mm
     * @param minlength set the minimum length of any streamline in mm
     * @param number_ set the desired number of selected streamlines to be propagated to the output file
     * @param skip omit this number of selected streamlines before commencing writing to the output file
     * @param maxweight set the maximum weight of any streamline
     * @param minweight set the minimum weight of any streamline
     * @param inverse output the inverse selection of streamlines based on the criteria provided; i.e. only those streamlines that fail at least one selection criterion, and/or vertices that are outside masks if provided, will be written to file
     * @param ends_only only test the ends of each streamline against the provided include/exclude ROIs
     * @param tck_weights_in specify a text scalar file containing the streamline weights
     * @param tck_weights_out specify the path for an output text scalar file containing streamline weights
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TckeditOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TCKEDIT_METADATA);
    const params = tckedit_params(tracks_in, tracks_out, include, include_ordered, exclude, mask, maxlength, minlength, number_, skip, maxweight, minweight, inverse, ends_only, tck_weights_in, tck_weights_out, info, quiet, debug, force, nthreads, config, help, version)
    return tckedit_execute(params, execution);
}


export {
      TCKEDIT_METADATA,
      TckeditConfigParameters,
      TckeditExcludeParameters,
      TckeditIncludeOrderedParameters,
      TckeditIncludeParameters,
      TckeditMaskParameters,
      TckeditOutputs,
      TckeditParameters,
      TckeditVariousFile1Parameters,
      TckeditVariousFile2Parameters,
      TckeditVariousFileParameters,
      TckeditVariousString1Parameters,
      TckeditVariousString2Parameters,
      TckeditVariousStringParameters,
      tckedit,
      tckedit_config_params,
      tckedit_exclude_params,
      tckedit_include_ordered_params,
      tckedit_include_params,
      tckedit_mask_params,
      tckedit_params,
      tckedit_various_file_1_params,
      tckedit_various_file_2_params,
      tckedit_various_file_params,
      tckedit_various_string_1_params,
      tckedit_various_string_2_params,
      tckedit_various_string_params,
};

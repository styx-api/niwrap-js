// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DJUNCT_4D_IMAGER_METADATA: Metadata = {
    id: "20ff42d780ed2dcd57ab1aca215000480c328e59.boutiques",
    name: "@djunct_4d_imager",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDjunct4dImagerParameters {
    "__STYXTYPE__": "@djunct_4d_imager";
    "inset": InputPathType;
    "prefix": string;
    "do_movie"?: "MPEG" | "AGIF" | null | undefined;
    "no_clean": boolean;
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
        "@djunct_4d_imager": v__djunct_4d_imager_cargs,
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
        "@djunct_4d_imager": v__djunct_4d_imager_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__djunct_4d_imager(...)`.
 *
 * @interface
 */
interface VDjunct4dImagerOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output montage image with constant brightness range
     */
    onescl_png: OutputPathType;
    /**
     * Output montage image with varying brightness range
     */
    sepscl_png: OutputPathType;
    /**
     * Output movie with constant brightness range (one slice at a time)
     */
    onescl_mpeg: OutputPathType;
    /**
     * Output movie with varying brightness range (one slice at a time)
     */
    sepscl_mpeg: OutputPathType;
    /**
     * Output animated GIF with constant brightness range (one slice at a time)
     */
    onescl_gif: OutputPathType;
    /**
     * Output animated GIF with varying brightness range (one slice at a time)
     */
    sepscl_gif: OutputPathType;
}


function v__djunct_4d_imager_params(
    inset: InputPathType,
    prefix: string,
    do_movie: "MPEG" | "AGIF" | null = null,
    no_clean: boolean = false,
): VDjunct4dImagerParameters {
    /**
     * Build parameters.
    
     * @param inset ULay dataset, probably 4D (required)
     * @param prefix Prefix for output files (required)
     * @param do_movie Specify type of movie file. Options: MPEG, AGIF
     * @param no_clean Keep the final intermediate files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@djunct_4d_imager" as const,
        "inset": inset,
        "prefix": prefix,
        "no_clean": no_clean,
    };
    if (do_movie !== null) {
        params["do_movie"] = do_movie;
    }
    return params;
}


function v__djunct_4d_imager_cargs(
    params: VDjunct4dImagerParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@djunct_4d_imager");
    cargs.push(execution.inputFile((params["inset"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    if ((params["do_movie"] ?? null) !== null) {
        cargs.push(
            "-do_movie",
            (params["do_movie"] ?? null)
        );
    }
    if ((params["no_clean"] ?? null)) {
        cargs.push("-no_clean");
    }
    return cargs;
}


function v__djunct_4d_imager_outputs(
    params: VDjunct4dImagerParameters,
    execution: Execution,
): VDjunct4dImagerOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDjunct4dImagerOutputs = {
        root: execution.outputFile("."),
        onescl_png: execution.outputFile([(params["prefix"] ?? null), "_onescl.png"].join('')),
        sepscl_png: execution.outputFile([(params["prefix"] ?? null), "_sepscl.png"].join('')),
        onescl_mpeg: execution.outputFile([(params["prefix"] ?? null), "_onescl.mpg"].join('')),
        sepscl_mpeg: execution.outputFile([(params["prefix"] ?? null), "_sepscl.mpg"].join('')),
        onescl_gif: execution.outputFile([(params["prefix"] ?? null), "_onescl.gif"].join('')),
        sepscl_gif: execution.outputFile([(params["prefix"] ?? null), "_sepscl.gif"].join('')),
    };
    return ret;
}


function v__djunct_4d_imager_execute(
    params: VDjunct4dImagerParameters,
    execution: Execution,
): VDjunct4dImagerOutputs {
    /**
     * The program is useful for viewing the same slice across the 'time' dimension of a 4D data set.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDjunct4dImagerOutputs`).
     */
    params = execution.params(params)
    const cargs = v__djunct_4d_imager_cargs(params, execution)
    const ret = v__djunct_4d_imager_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__djunct_4d_imager(
    inset: InputPathType,
    prefix: string,
    do_movie: "MPEG" | "AGIF" | null = null,
    no_clean: boolean = false,
    runner: Runner | null = null,
): VDjunct4dImagerOutputs {
    /**
     * The program is useful for viewing the same slice across the 'time' dimension of a 4D data set.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param inset ULay dataset, probably 4D (required)
     * @param prefix Prefix for output files (required)
     * @param do_movie Specify type of movie file. Options: MPEG, AGIF
     * @param no_clean Keep the final intermediate files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDjunct4dImagerOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DJUNCT_4D_IMAGER_METADATA);
    const params = v__djunct_4d_imager_params(inset, prefix, do_movie, no_clean)
    return v__djunct_4d_imager_execute(params, execution);
}


export {
      VDjunct4dImagerOutputs,
      VDjunct4dImagerParameters,
      V__DJUNCT_4D_IMAGER_METADATA,
      v__djunct_4d_imager,
      v__djunct_4d_imager_params,
};

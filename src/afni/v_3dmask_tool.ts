// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DMASK_TOOL_METADATA: Metadata = {
    id: "f2fd8cb6530073ae76f5a5580b7395d517ad7ba2.boutiques",
    name: "3dmask_tool",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dmaskToolParameters {
    "__STYXTYPE__": "3dmask_tool";
    "count": boolean;
    "datum"?: "byte" | "short" | "float" | null | undefined;
    "dilate_inputs"?: string | null | undefined;
    "dilate_results"?: string | null | undefined;
    "fill_dirs"?: string | null | undefined;
    "fill_holes": boolean;
    "frac"?: number | null | undefined;
    "in_file": InputPathType;
    "inter": boolean;
    "num_threads"?: number | null | undefined;
    "outputtype"?: "NIFTI" | "AFNI" | "NIFTI_GZ" | null | undefined;
    "union": boolean;
    "verbose"?: number | null | undefined;
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
        "3dmask_tool": v_3dmask_tool_cargs,
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
        "3dmask_tool": v_3dmask_tool_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dmask_tool(...)`.
 *
 * @interface
 */
interface V3dmaskToolOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file name.
     */
    out_file: OutputPathType;
    /**
     * Mask file.
     */
    out_file_: OutputPathType;
}


function v_3dmask_tool_params(
    in_file: InputPathType,
    count: boolean = false,
    datum: "byte" | "short" | "float" | null = null,
    dilate_inputs: string | null = null,
    dilate_results: string | null = null,
    fill_dirs: string | null = null,
    fill_holes: boolean = false,
    frac: number | null = null,
    inter: boolean = false,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    union: boolean = false,
    verbose: number | null = null,
): V3dmaskToolParameters {
    /**
     * Build parameters.
    
     * @param in_file Input file to 3dmask_tool.
     * @param count Instead of created a binary 0/1 mask dataset, create one with counts of voxel overlap, i.e., each voxel will contain the number of masks that it is set in.
     * @param datum 'byte' or 'short' or 'float'. Specify data type for output.
     * @param dilate_inputs Use this option to dilate and/or erode datasets as they are read. ex. '5 -5' to dilate and erode 5 times.
     * @param dilate_results Dilate and/or erode combined mask at the given levels.
     * @param fill_dirs Fill holes only in the given directions. this option is for use with -fill holes. should be a single string that specifies 1-3 of the axes using {x,y,z} labels (i.e. dataset axis order), or using the labels in {r,l,a,p,i,s}.
     * @param fill_holes This option can be used to fill holes in the resulting mask, i.e. after all other processing has been done.
     * @param frac When combining masks (across datasets and sub-bricks), use this option to restrict the result to a certain fraction of the set of volumes.
     * @param inter Intersection, this means -frac 1.0.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param union Union, this means -frac 0.
     * @param verbose Specify verbosity level, for 0 to 3.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dmask_tool" as const,
        "count": count,
        "fill_holes": fill_holes,
        "in_file": in_file,
        "inter": inter,
        "union": union,
    };
    if (datum !== null) {
        params["datum"] = datum;
    }
    if (dilate_inputs !== null) {
        params["dilate_inputs"] = dilate_inputs;
    }
    if (dilate_results !== null) {
        params["dilate_results"] = dilate_results;
    }
    if (fill_dirs !== null) {
        params["fill_dirs"] = fill_dirs;
    }
    if (frac !== null) {
        params["frac"] = frac;
    }
    if (num_threads !== null) {
        params["num_threads"] = num_threads;
    }
    if (outputtype !== null) {
        params["outputtype"] = outputtype;
    }
    if (verbose !== null) {
        params["verbose"] = verbose;
    }
    return params;
}


function v_3dmask_tool_cargs(
    params: V3dmaskToolParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dmask_tool");
    if ((params["count"] ?? null)) {
        cargs.push("-count");
    }
    if ((params["datum"] ?? null) !== null) {
        cargs.push(
            "-datum",
            (params["datum"] ?? null)
        );
    }
    if ((params["dilate_inputs"] ?? null) !== null) {
        cargs.push(
            "-dilate_inputs",
            (params["dilate_inputs"] ?? null)
        );
    }
    if ((params["dilate_results"] ?? null) !== null) {
        cargs.push(
            "-dilate_results",
            (params["dilate_results"] ?? null)
        );
    }
    if ((params["fill_dirs"] ?? null) !== null) {
        cargs.push(
            "-fill_dirs",
            (params["fill_dirs"] ?? null)
        );
    }
    if ((params["fill_holes"] ?? null)) {
        cargs.push("-fill_holes");
    }
    if ((params["frac"] ?? null) !== null) {
        cargs.push(
            "-frac",
            String((params["frac"] ?? null))
        );
    }
    cargs.push(
        "-input",
        execution.inputFile((params["in_file"] ?? null))
    );
    if ((params["inter"] ?? null)) {
        cargs.push("-inter");
    }
    if ((params["num_threads"] ?? null) !== null) {
        cargs.push(String((params["num_threads"] ?? null)));
    }
    if ((params["outputtype"] ?? null) !== null) {
        cargs.push((params["outputtype"] ?? null));
    }
    if ((params["union"] ?? null)) {
        cargs.push("-union");
    }
    if ((params["verbose"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbose"] ?? null))
        );
    }
    return cargs;
}


function v_3dmask_tool_outputs(
    params: V3dmaskToolParameters,
    execution: Execution,
): V3dmaskToolOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dmaskToolOutputs = {
        root: execution.outputFile("."),
        out_file: execution.outputFile([path.basename((params["in_file"] ?? null)), "_mask"].join('')),
        out_file_: execution.outputFile(["out_file"].join('')),
    };
    return ret;
}


function v_3dmask_tool_execute(
    params: V3dmaskToolParameters,
    execution: Execution,
): V3dmaskToolOutputs {
    /**
     * 3dmask_tool - for combining/dilating/eroding/filling masks.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dmaskToolOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dmask_tool_cargs(params, execution)
    const ret = v_3dmask_tool_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dmask_tool(
    in_file: InputPathType,
    count: boolean = false,
    datum: "byte" | "short" | "float" | null = null,
    dilate_inputs: string | null = null,
    dilate_results: string | null = null,
    fill_dirs: string | null = null,
    fill_holes: boolean = false,
    frac: number | null = null,
    inter: boolean = false,
    num_threads: number | null = null,
    outputtype: "NIFTI" | "AFNI" | "NIFTI_GZ" | null = null,
    union: boolean = false,
    verbose: number | null = null,
    runner: Runner | null = null,
): V3dmaskToolOutputs {
    /**
     * 3dmask_tool - for combining/dilating/eroding/filling masks.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_file Input file to 3dmask_tool.
     * @param count Instead of created a binary 0/1 mask dataset, create one with counts of voxel overlap, i.e., each voxel will contain the number of masks that it is set in.
     * @param datum 'byte' or 'short' or 'float'. Specify data type for output.
     * @param dilate_inputs Use this option to dilate and/or erode datasets as they are read. ex. '5 -5' to dilate and erode 5 times.
     * @param dilate_results Dilate and/or erode combined mask at the given levels.
     * @param fill_dirs Fill holes only in the given directions. this option is for use with -fill holes. should be a single string that specifies 1-3 of the axes using {x,y,z} labels (i.e. dataset axis order), or using the labels in {r,l,a,p,i,s}.
     * @param fill_holes This option can be used to fill holes in the resulting mask, i.e. after all other processing has been done.
     * @param frac When combining masks (across datasets and sub-bricks), use this option to restrict the result to a certain fraction of the set of volumes.
     * @param inter Intersection, this means -frac 1.0.
     * @param num_threads Set number of threads.
     * @param outputtype 'nifti' or 'afni' or 'nifti_gz'. Afni output filetype.
     * @param union Union, this means -frac 0.
     * @param verbose Specify verbosity level, for 0 to 3.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dmaskToolOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DMASK_TOOL_METADATA);
    const params = v_3dmask_tool_params(in_file, count, datum, dilate_inputs, dilate_results, fill_dirs, fill_holes, frac, inter, num_threads, outputtype, union, verbose)
    return v_3dmask_tool_execute(params, execution);
}


export {
      V3dmaskToolOutputs,
      V3dmaskToolParameters,
      V_3DMASK_TOOL_METADATA,
      v_3dmask_tool,
      v_3dmask_tool_params,
};

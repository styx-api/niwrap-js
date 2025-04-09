// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TBSS_SKELETON_METADATA: Metadata = {
    id: "1d1eb1ef7c8c0aea9874c157c358b3b8915a8128.boutiques",
    name: "tbss_skeleton",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface TbssSkeletonParameters {
    "__STYXTYPE__": "tbss_skeleton";
    "input_image": InputPathType;
    "output_image"?: string | null | undefined;
    "skeleton_params"?: Array<string> | null | undefined;
    "alt_4d"?: InputPathType | null | undefined;
    "alt_skeleton"?: InputPathType | null | undefined;
    "debug_flag": boolean;
    "debug2_flag"?: InputPathType | null | undefined;
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
        "tbss_skeleton": tbss_skeleton_cargs,
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
        "tbss_skeleton": tbss_skeleton_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tbss_skeleton(...)`.
 *
 * @interface
 */
interface TbssSkeletonOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output skeleton image
     */
    output_image_file: OutputPathType | null;
    /**
     * Projected 4D data
     */
    projected_4d_file: OutputPathType;
    /**
     * Alternative 4D data
     */
    alt_4d_file: OutputPathType | null;
    /**
     * Alternative skeleton image
     */
    alt_skeleton_file: OutputPathType | null;
    /**
     * De-projected skelpoints points on skeleton back to all_FA space
     */
    debug2_image_outputs: OutputPathType | null;
}


function tbss_skeleton_params(
    input_image: InputPathType,
    output_image: string | null = null,
    skeleton_params: Array<string> | null = null,
    alt_4d: InputPathType | null = null,
    alt_skeleton: InputPathType | null = null,
    debug_flag: boolean = false,
    debug2_flag: InputPathType | null = null,
): TbssSkeletonParameters {
    /**
     * Build parameters.
    
     * @param input_image Input image
     * @param output_image Output skeleton image
     * @param skeleton_params Skeletonization parameters: <skel_thresh> <distancemap> <search_rule_mask> <4Ddata> <projected_4Ddata>
     * @param alt_4d Alternative 4D data (e.g., L1)
     * @param alt_skeleton Alternative skeleton
     * @param debug_flag Switch on debugging image outputs
     * @param debug2_flag De-project skelpoints points on skeleton back to all_FA space
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tbss_skeleton" as const,
        "input_image": input_image,
        "debug_flag": debug_flag,
    };
    if (output_image !== null) {
        params["output_image"] = output_image;
    }
    if (skeleton_params !== null) {
        params["skeleton_params"] = skeleton_params;
    }
    if (alt_4d !== null) {
        params["alt_4d"] = alt_4d;
    }
    if (alt_skeleton !== null) {
        params["alt_skeleton"] = alt_skeleton;
    }
    if (debug2_flag !== null) {
        params["debug2_flag"] = debug2_flag;
    }
    return params;
}


function tbss_skeleton_cargs(
    params: TbssSkeletonParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tbss_skeleton");
    cargs.push(
        "-i",
        execution.inputFile((params["input_image"] ?? null))
    );
    if ((params["output_image"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_image"] ?? null)
        );
    }
    if ((params["skeleton_params"] ?? null) !== null) {
        cargs.push(
            "-p",
            ...(params["skeleton_params"] ?? null)
        );
    }
    if ((params["alt_4d"] ?? null) !== null) {
        cargs.push(
            "-a",
            execution.inputFile((params["alt_4d"] ?? null))
        );
    }
    if ((params["alt_skeleton"] ?? null) !== null) {
        cargs.push(
            "-s",
            execution.inputFile((params["alt_skeleton"] ?? null))
        );
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("-d");
    }
    if ((params["debug2_flag"] ?? null) !== null) {
        cargs.push(
            "-D",
            execution.inputFile((params["debug2_flag"] ?? null))
        );
    }
    return cargs;
}


function tbss_skeleton_outputs(
    params: TbssSkeletonParameters,
    execution: Execution,
): TbssSkeletonOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TbssSkeletonOutputs = {
        root: execution.outputFile("."),
        output_image_file: ((params["output_image"] ?? null) !== null) ? execution.outputFile([(params["output_image"] ?? null)].join('')) : null,
        projected_4d_file: execution.outputFile(["[PROJECTED_4D]"].join('')),
        alt_4d_file: ((params["alt_4d"] ?? null) !== null) ? execution.outputFile([path.basename((params["alt_4d"] ?? null))].join('')) : null,
        alt_skeleton_file: ((params["alt_skeleton"] ?? null) !== null) ? execution.outputFile([path.basename((params["alt_skeleton"] ?? null))].join('')) : null,
        debug2_image_outputs: ((params["debug2_flag"] ?? null) !== null) ? execution.outputFile([path.basename((params["debug2_flag"] ?? null))].join('')) : null,
    };
    return ret;
}


function tbss_skeleton_execute(
    params: TbssSkeletonParameters,
    execution: Execution,
): TbssSkeletonOutputs {
    /**
     * A tool for defining a 'skeleton' of white matter tracts in the brain to help compare them across subjects.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TbssSkeletonOutputs`).
     */
    params = execution.params(params)
    const cargs = tbss_skeleton_cargs(params, execution)
    const ret = tbss_skeleton_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tbss_skeleton(
    input_image: InputPathType,
    output_image: string | null = null,
    skeleton_params: Array<string> | null = null,
    alt_4d: InputPathType | null = null,
    alt_skeleton: InputPathType | null = null,
    debug_flag: boolean = false,
    debug2_flag: InputPathType | null = null,
    runner: Runner | null = null,
): TbssSkeletonOutputs {
    /**
     * A tool for defining a 'skeleton' of white matter tracts in the brain to help compare them across subjects.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_image Input image
     * @param output_image Output skeleton image
     * @param skeleton_params Skeletonization parameters: <skel_thresh> <distancemap> <search_rule_mask> <4Ddata> <projected_4Ddata>
     * @param alt_4d Alternative 4D data (e.g., L1)
     * @param alt_skeleton Alternative skeleton
     * @param debug_flag Switch on debugging image outputs
     * @param debug2_flag De-project skelpoints points on skeleton back to all_FA space
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TbssSkeletonOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TBSS_SKELETON_METADATA);
    const params = tbss_skeleton_params(input_image, output_image, skeleton_params, alt_4d, alt_skeleton, debug_flag, debug2_flag)
    return tbss_skeleton_execute(params, execution);
}


export {
      TBSS_SKELETON_METADATA,
      TbssSkeletonOutputs,
      TbssSkeletonParameters,
      tbss_skeleton,
      tbss_skeleton_params,
};

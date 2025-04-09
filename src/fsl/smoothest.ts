// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SMOOTHEST_METADATA: Metadata = {
    id: "ca3a67386fb909e7959f6c335705464ad8eead96.boutiques",
    name: "smoothest",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SmoothestParameters {
    "__STYXTYPE__": "smoothest";
    "dof"?: number | null | undefined;
    "residual_fit_image"?: InputPathType | null | undefined;
    "zstat_image"?: InputPathType | null | undefined;
    "mask": InputPathType;
    "verbose_flag": boolean;
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
        "smoothest": smoothest_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `smoothest(...)`.
 *
 * @interface
 */
interface SmoothestOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function smoothest_params(
    mask: InputPathType,
    dof: number | null = null,
    residual_fit_image: InputPathType | null = null,
    zstat_image: InputPathType | null = null,
    verbose_flag: boolean = false,
): SmoothestParameters {
    /**
     * Build parameters.
    
     * @param mask Brain mask volume
     * @param dof Number of degrees of freedom
     * @param residual_fit_image Filename of `residual-fit` image (use -d)
     * @param zstat_image Filename of zstat image (not with -d)
     * @param verbose_flag Switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "smoothest" as const,
        "mask": mask,
        "verbose_flag": verbose_flag,
    };
    if (dof !== null) {
        params["dof"] = dof;
    }
    if (residual_fit_image !== null) {
        params["residual_fit_image"] = residual_fit_image;
    }
    if (zstat_image !== null) {
        params["zstat_image"] = zstat_image;
    }
    return params;
}


function smoothest_cargs(
    params: SmoothestParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("smoothest");
    if ((params["dof"] ?? null) !== null) {
        cargs.push(
            "-d",
            String((params["dof"] ?? null))
        );
    }
    if ((params["residual_fit_image"] ?? null) !== null) {
        cargs.push(
            "-r",
            execution.inputFile((params["residual_fit_image"] ?? null))
        );
    }
    if ((params["zstat_image"] ?? null) !== null) {
        cargs.push(
            "-z",
            execution.inputFile((params["zstat_image"] ?? null))
        );
    }
    cargs.push(
        "-m",
        execution.inputFile((params["mask"] ?? null))
    );
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-V");
    }
    return cargs;
}


function smoothest_outputs(
    params: SmoothestParameters,
    execution: Execution,
): SmoothestOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SmoothestOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function smoothest_execute(
    params: SmoothestParameters,
    execution: Execution,
): SmoothestOutputs {
    /**
     * Tool to estimate smoothness of data from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SmoothestOutputs`).
     */
    params = execution.params(params)
    const cargs = smoothest_cargs(params, execution)
    const ret = smoothest_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function smoothest(
    mask: InputPathType,
    dof: number | null = null,
    residual_fit_image: InputPathType | null = null,
    zstat_image: InputPathType | null = null,
    verbose_flag: boolean = false,
    runner: Runner | null = null,
): SmoothestOutputs {
    /**
     * Tool to estimate smoothness of data from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param mask Brain mask volume
     * @param dof Number of degrees of freedom
     * @param residual_fit_image Filename of `residual-fit` image (use -d)
     * @param zstat_image Filename of zstat image (not with -d)
     * @param verbose_flag Switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SmoothestOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SMOOTHEST_METADATA);
    const params = smoothest_params(mask, dof, residual_fit_image, zstat_image, verbose_flag)
    return smoothest_execute(params, execution);
}


export {
      SMOOTHEST_METADATA,
      SmoothestOutputs,
      SmoothestParameters,
      smoothest,
      smoothest_params,
};

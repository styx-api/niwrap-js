// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const INVWARP_METADATA: Metadata = {
    id: "03079852a17a95201c7b714299f81ebc4f55cf3b.boutiques",
    name: "invwarp",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface InvwarpParameters {
    "__STYXTYPE__": "invwarp";
    "warp": InputPathType;
    "out_img": string;
    "ref_img": InputPathType;
    "absolute": boolean;
    "relative": boolean;
    "noconstraint": boolean;
    "jacobian_min"?: number | null | undefined;
    "jacobian_max"?: number | null | undefined;
    "debug": boolean;
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
        "invwarp": invwarp_cargs,
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
        "invwarp": invwarp_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `invwarp(...)`.
 *
 * @interface
 */
interface InvwarpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Name of output file, containing warps that are the "reverse" of those in --warp. this will be a field-file (rather than a file of spline coefficients), and it will have any affine component included as part of the displacements.
     */
    inverse_warp: OutputPathType;
}


function invwarp_params(
    warp: InputPathType,
    out_img: string,
    ref_img: InputPathType,
    absolute: boolean = false,
    relative: boolean = false,
    noconstraint: boolean = false,
    jacobian_min: number | null = null,
    jacobian_max: number | null = null,
    debug: boolean = false,
): InvwarpParameters {
    /**
     * Build parameters.
    
     * @param warp Filename for warp/shiftmap transform (volume).
     * @param out_img Filename for output (inverse warped) image.
     * @param ref_img Filename for new reference image.
     * @param absolute Use absolute warp convention (default): x' = w(x).
     * @param relative Use relative warp convention (default): x' = x + w(x).
     * @param noconstraint Do not apply jacobian constraint.
     * @param jacobian_min Minimum acceptable jacobian value for constraint (default 0.01).
     * @param jacobian_max Maximum acceptable jacobian value for constraint (default 100.0).
     * @param debug Turn on debugging output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "invwarp" as const,
        "warp": warp,
        "out_img": out_img,
        "ref_img": ref_img,
        "absolute": absolute,
        "relative": relative,
        "noconstraint": noconstraint,
        "debug": debug,
    };
    if (jacobian_min !== null) {
        params["jacobian_min"] = jacobian_min;
    }
    if (jacobian_max !== null) {
        params["jacobian_max"] = jacobian_max;
    }
    return params;
}


function invwarp_cargs(
    params: InvwarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("invwarp");
    cargs.push(["--warp=", execution.inputFile((params["warp"] ?? null))].join(''));
    cargs.push(["--out=", (params["out_img"] ?? null)].join(''));
    cargs.push(["--ref=", execution.inputFile((params["ref_img"] ?? null))].join(''));
    if ((params["absolute"] ?? null)) {
        cargs.push("--abs");
    }
    if ((params["relative"] ?? null)) {
        cargs.push("--rel");
    }
    if ((params["noconstraint"] ?? null)) {
        cargs.push("--noconstraint");
    }
    if ((params["jacobian_min"] ?? null) !== null) {
        cargs.push(["--jmin=", String((params["jacobian_min"] ?? null))].join(''));
    }
    if ((params["jacobian_max"] ?? null) !== null) {
        cargs.push(["--jmax=", String((params["jacobian_max"] ?? null))].join(''));
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function invwarp_outputs(
    params: InvwarpParameters,
    execution: Execution,
): InvwarpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: InvwarpOutputs = {
        root: execution.outputFile("."),
        inverse_warp: execution.outputFile([(params["out_img"] ?? null)].join('')),
    };
    return ret;
}


function invwarp_execute(
    params: InvwarpParameters,
    execution: Execution,
): InvwarpOutputs {
    /**
     * 
     * Use FSL Invwarp to invert a FNIRT warp.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `InvwarpOutputs`).
     */
    params = execution.params(params)
    const cargs = invwarp_cargs(params, execution)
    const ret = invwarp_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function invwarp(
    warp: InputPathType,
    out_img: string,
    ref_img: InputPathType,
    absolute: boolean = false,
    relative: boolean = false,
    noconstraint: boolean = false,
    jacobian_min: number | null = null,
    jacobian_max: number | null = null,
    debug: boolean = false,
    runner: Runner | null = null,
): InvwarpOutputs {
    /**
     * 
     * Use FSL Invwarp to invert a FNIRT warp.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param warp Filename for warp/shiftmap transform (volume).
     * @param out_img Filename for output (inverse warped) image.
     * @param ref_img Filename for new reference image.
     * @param absolute Use absolute warp convention (default): x' = w(x).
     * @param relative Use relative warp convention (default): x' = x + w(x).
     * @param noconstraint Do not apply jacobian constraint.
     * @param jacobian_min Minimum acceptable jacobian value for constraint (default 0.01).
     * @param jacobian_max Maximum acceptable jacobian value for constraint (default 100.0).
     * @param debug Turn on debugging output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `InvwarpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(INVWARP_METADATA);
    const params = invwarp_params(warp, out_img, ref_img, absolute, relative, noconstraint, jacobian_min, jacobian_max, debug)
    return invwarp_execute(params, execution);
}


export {
      INVWARP_METADATA,
      InvwarpOutputs,
      InvwarpParameters,
      invwarp,
      invwarp_params,
};

// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVERT_FIBER_ORIENTATIONS_METADATA: Metadata = {
    id: "d8e6b76fdb3e3cb8fd337470f0e083e13b7df64d.boutiques",
    name: "convert-fiber-orientations",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface ConvertFiberOrientationsFiberParameters {
    "__STYXTYPE__": "fiber";
    "mean_f": InputPathType;
    "stdev_f": InputPathType;
    "theta": InputPathType;
    "phi": InputPathType;
    "psi": InputPathType;
    "ka": InputPathType;
    "kb": InputPathType;
}


interface ConvertFiberOrientationsParameters {
    "__STYXTYPE__": "convert-fiber-orientations";
    "label_volume": InputPathType;
    "fiber_out": string;
    "fiber"?: Array<ConvertFiberOrientationsFiberParameters> | null | undefined;
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
        "convert-fiber-orientations": convert_fiber_orientations_cargs,
        "fiber": convert_fiber_orientations_fiber_cargs,
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
        "convert-fiber-orientations": convert_fiber_orientations_outputs,
    };
    return outputsFuncs[t];
}


function convert_fiber_orientations_fiber_params(
    mean_f: InputPathType,
    stdev_f: InputPathType,
    theta: InputPathType,
    phi: InputPathType,
    psi: InputPathType,
    ka: InputPathType,
    kb: InputPathType,
): ConvertFiberOrientationsFiberParameters {
    /**
     * Build parameters.
    
     * @param mean_f mean fiber strength
     * @param stdev_f standard deviation of fiber strength
     * @param theta theta angle
     * @param phi phi angle
     * @param psi psi angle
     * @param ka ka bingham parameter
     * @param kb kb bingham parameter
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fiber" as const,
        "mean_f": mean_f,
        "stdev_f": stdev_f,
        "theta": theta,
        "phi": phi,
        "psi": psi,
        "ka": ka,
        "kb": kb,
    };
    return params;
}


function convert_fiber_orientations_fiber_cargs(
    params: ConvertFiberOrientationsFiberParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-fiber");
    cargs.push(execution.inputFile((params["mean_f"] ?? null)));
    cargs.push(execution.inputFile((params["stdev_f"] ?? null)));
    cargs.push(execution.inputFile((params["theta"] ?? null)));
    cargs.push(execution.inputFile((params["phi"] ?? null)));
    cargs.push(execution.inputFile((params["psi"] ?? null)));
    cargs.push(execution.inputFile((params["ka"] ?? null)));
    cargs.push(execution.inputFile((params["kb"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `convert_fiber_orientations(...)`.
 *
 * @interface
 */
interface ConvertFiberOrientationsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output fiber orientation file
     */
    fiber_out: OutputPathType;
}


function convert_fiber_orientations_params(
    label_volume: InputPathType,
    fiber_out: string,
    fiber: Array<ConvertFiberOrientationsFiberParameters> | null = null,
): ConvertFiberOrientationsParameters {
    /**
     * Build parameters.
    
     * @param label_volume volume of cifti structure labels
     * @param fiber_out the output fiber orientation file
     * @param fiber specify the parameter volumes for a fiber
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "convert-fiber-orientations" as const,
        "label_volume": label_volume,
        "fiber_out": fiber_out,
    };
    if (fiber !== null) {
        params["fiber"] = fiber;
    }
    return params;
}


function convert_fiber_orientations_cargs(
    params: ConvertFiberOrientationsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-convert-fiber-orientations");
    cargs.push(execution.inputFile((params["label_volume"] ?? null)));
    cargs.push((params["fiber_out"] ?? null));
    if ((params["fiber"] ?? null) !== null) {
        cargs.push(...(params["fiber"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function convert_fiber_orientations_outputs(
    params: ConvertFiberOrientationsParameters,
    execution: Execution,
): ConvertFiberOrientationsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvertFiberOrientationsOutputs = {
        root: execution.outputFile("."),
        fiber_out: execution.outputFile([(params["fiber_out"] ?? null)].join('')),
    };
    return ret;
}


function convert_fiber_orientations_execute(
    params: ConvertFiberOrientationsParameters,
    execution: Execution,
): ConvertFiberOrientationsOutputs {
    /**
     * Convert bingham parameter volumes to fiber orientation file.
     * 
     * Takes precomputed bingham parameters from volume files and converts them to the format workbench uses for display.  The <label-volume> argument must be a label volume, where the labels use these strings:
     * 
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvertFiberOrientationsOutputs`).
     */
    params = execution.params(params)
    const cargs = convert_fiber_orientations_cargs(params, execution)
    const ret = convert_fiber_orientations_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convert_fiber_orientations(
    label_volume: InputPathType,
    fiber_out: string,
    fiber: Array<ConvertFiberOrientationsFiberParameters> | null = null,
    runner: Runner | null = null,
): ConvertFiberOrientationsOutputs {
    /**
     * Convert bingham parameter volumes to fiber orientation file.
     * 
     * Takes precomputed bingham parameters from volume files and converts them to the format workbench uses for display.  The <label-volume> argument must be a label volume, where the labels use these strings:
     * 
     * 
     * CORTEX_LEFT
     * CORTEX_RIGHT
     * CEREBELLUM
     * ACCUMBENS_LEFT
     * ACCUMBENS_RIGHT
     * ALL_GREY_MATTER
     * ALL_WHITE_MATTER
     * AMYGDALA_LEFT
     * AMYGDALA_RIGHT
     * BRAIN_STEM
     * CAUDATE_LEFT
     * CAUDATE_RIGHT
     * CEREBELLAR_WHITE_MATTER_LEFT
     * CEREBELLAR_WHITE_MATTER_RIGHT
     * CEREBELLUM_LEFT
     * CEREBELLUM_RIGHT
     * CEREBRAL_WHITE_MATTER_LEFT
     * CEREBRAL_WHITE_MATTER_RIGHT
     * CORTEX
     * DIENCEPHALON_VENTRAL_LEFT
     * DIENCEPHALON_VENTRAL_RIGHT
     * HIPPOCAMPUS_LEFT
     * HIPPOCAMPUS_RIGHT
     * INVALID
     * OTHER
     * OTHER_GREY_MATTER
     * OTHER_WHITE_MATTER
     * PALLIDUM_LEFT
     * PALLIDUM_RIGHT
     * PUTAMEN_LEFT
     * PUTAMEN_RIGHT
     * THALAMUS_LEFT
     * THALAMUS_RIGHT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_volume volume of cifti structure labels
     * @param fiber_out the output fiber orientation file
     * @param fiber specify the parameter volumes for a fiber
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvertFiberOrientationsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVERT_FIBER_ORIENTATIONS_METADATA);
    const params = convert_fiber_orientations_params(label_volume, fiber_out, fiber)
    return convert_fiber_orientations_execute(params, execution);
}


export {
      CONVERT_FIBER_ORIENTATIONS_METADATA,
      ConvertFiberOrientationsFiberParameters,
      ConvertFiberOrientationsOutputs,
      ConvertFiberOrientationsParameters,
      convert_fiber_orientations,
      convert_fiber_orientations_fiber_params,
      convert_fiber_orientations_params,
};

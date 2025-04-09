// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DJUNCT_MONTAGE_COORDINATOR_METADATA: Metadata = {
    id: "64d756e8e5ea73bbb91b5d094f44148b8d947acd.boutiques",
    name: "@djunct_montage_coordinator",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDjunctMontageCoordinatorParameters {
    "__STYXTYPE__": "@djunct_montage_coordinator";
    "input_file": InputPathType;
    "montx": number;
    "monty": number;
    "out_ijk": boolean;
    "out_xyz": boolean;
    "help": boolean;
    "version": boolean;
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
        "@djunct_montage_coordinator": v__djunct_montage_coordinator_cargs,
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
        "@djunct_montage_coordinator": v__djunct_montage_coordinator_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__djunct_montage_coordinator(...)`.
 *
 * @interface
 */
interface VDjunctMontageCoordinatorOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output coordinates (IJK or XYZ) for the montage setup.
     */
    output_coords: OutputPathType;
}


function v__djunct_montage_coordinator_params(
    input_file: InputPathType,
    montx: number,
    monty: number,
    out_ijk: boolean = false,
    out_xyz: boolean = false,
    help: boolean = false,
    version: boolean = false,
): VDjunctMontageCoordinatorParameters {
    /**
     * Build parameters.
    
     * @param input_file Name of input dataset
     * @param montx Montage dimension: number of panels along x-axis (i.e., number of cols)
     * @param monty Montage dimension: number of panels along y-axis (i.e., number of rows)
     * @param out_ijk Make program output 'I J K' values.
     * @param out_xyz Make program output 'X Y Z' values.
     * @param help See helpfile.
     * @param version See version number.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@djunct_montage_coordinator" as const,
        "input_file": input_file,
        "montx": montx,
        "monty": monty,
        "out_ijk": out_ijk,
        "out_xyz": out_xyz,
        "help": help,
        "version": version,
    };
    return params;
}


function v__djunct_montage_coordinator_cargs(
    params: VDjunctMontageCoordinatorParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@djunct_montage_coordinator");
    cargs.push(
        "-inset",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-montx",
        String((params["montx"] ?? null))
    );
    cargs.push(
        "-monty",
        String((params["monty"] ?? null))
    );
    if ((params["out_ijk"] ?? null)) {
        cargs.push("-out_ijk");
    }
    if ((params["out_xyz"] ?? null)) {
        cargs.push("-out_xyz");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-ver");
    }
    return cargs;
}


function v__djunct_montage_coordinator_outputs(
    params: VDjunctMontageCoordinatorParameters,
    execution: Execution,
): VDjunctMontageCoordinatorOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDjunctMontageCoordinatorOutputs = {
        root: execution.outputFile("."),
        output_coords: execution.outputFile(["output.txt"].join('')),
    };
    return ret;
}


function v__djunct_montage_coordinator_execute(
    params: VDjunctMontageCoordinatorParameters,
    execution: Execution,
): VDjunctMontageCoordinatorOutputs {
    /**
     * Small program to calculate how to evenly space a certain number of slices within each view plane of a dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDjunctMontageCoordinatorOutputs`).
     */
    params = execution.params(params)
    const cargs = v__djunct_montage_coordinator_cargs(params, execution)
    const ret = v__djunct_montage_coordinator_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__djunct_montage_coordinator(
    input_file: InputPathType,
    montx: number,
    monty: number,
    out_ijk: boolean = false,
    out_xyz: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): VDjunctMontageCoordinatorOutputs {
    /**
     * Small program to calculate how to evenly space a certain number of slices within each view plane of a dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Name of input dataset
     * @param montx Montage dimension: number of panels along x-axis (i.e., number of cols)
     * @param monty Montage dimension: number of panels along y-axis (i.e., number of rows)
     * @param out_ijk Make program output 'I J K' values.
     * @param out_xyz Make program output 'X Y Z' values.
     * @param help See helpfile.
     * @param version See version number.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDjunctMontageCoordinatorOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DJUNCT_MONTAGE_COORDINATOR_METADATA);
    const params = v__djunct_montage_coordinator_params(input_file, montx, monty, out_ijk, out_xyz, help, version)
    return v__djunct_montage_coordinator_execute(params, execution);
}


export {
      VDjunctMontageCoordinatorOutputs,
      VDjunctMontageCoordinatorParameters,
      V__DJUNCT_MONTAGE_COORDINATOR_METADATA,
      v__djunct_montage_coordinator,
      v__djunct_montage_coordinator_params,
};

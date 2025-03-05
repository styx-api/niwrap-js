// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TEST_ORIENTATION_PLANES_FROM_PARCELLATION_METADATA: Metadata = {
    id: "4ec44f64124a848bb9ff90699fb3e68885365ff6.boutiques",
    name: "testOrientationPlanesFromParcellation",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TestOrientationPlanesFromParcellationParameters {
    "__STYXTYPE__": "testOrientationPlanesFromParcellation";
    "input_file": InputPathType;
    "output_file": string;
    "bb_flag": boolean;
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
        "testOrientationPlanesFromParcellation": test_orientation_planes_from_parcellation_cargs,
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
 * Output object returned when calling `test_orientation_planes_from_parcellation(...)`.
 *
 * @interface
 */
interface TestOrientationPlanesFromParcellationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function test_orientation_planes_from_parcellation_params(
    input_file: InputPathType,
    output_file: string,
    bb_flag: boolean = false,
): TestOrientationPlanesFromParcellationParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file for the parcellation data.
     * @param output_file Output file for the orientation planes results.
     * @param bb_flag Flag to use bounding box in the computation.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "testOrientationPlanesFromParcellation" as const,
        "input_file": input_file,
        "output_file": output_file,
        "bb_flag": bb_flag,
    };
    return params;
}


function test_orientation_planes_from_parcellation_cargs(
    params: TestOrientationPlanesFromParcellationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("testOrientationPlanesFromParcellation");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output_file"] ?? null)
    );
    if ((params["bb_flag"] ?? null)) {
        cargs.push("-bb");
    }
    return cargs;
}


function test_orientation_planes_from_parcellation_outputs(
    params: TestOrientationPlanesFromParcellationParameters,
    execution: Execution,
): TestOrientationPlanesFromParcellationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TestOrientationPlanesFromParcellationOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function test_orientation_planes_from_parcellation_execute(
    params: TestOrientationPlanesFromParcellationParameters,
    execution: Execution,
): TestOrientationPlanesFromParcellationOutputs {
    /**
     * Tests orientation planes from a given parcellation using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TestOrientationPlanesFromParcellationOutputs`).
     */
    params = execution.params(params)
    const cargs = test_orientation_planes_from_parcellation_cargs(params, execution)
    const ret = test_orientation_planes_from_parcellation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function test_orientation_planes_from_parcellation(
    input_file: InputPathType,
    output_file: string,
    bb_flag: boolean = false,
    runner: Runner | null = null,
): TestOrientationPlanesFromParcellationOutputs {
    /**
     * Tests orientation planes from a given parcellation using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input file for the parcellation data.
     * @param output_file Output file for the orientation planes results.
     * @param bb_flag Flag to use bounding box in the computation.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TestOrientationPlanesFromParcellationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TEST_ORIENTATION_PLANES_FROM_PARCELLATION_METADATA);
    const params = test_orientation_planes_from_parcellation_params(input_file, output_file, bb_flag)
    return test_orientation_planes_from_parcellation_execute(params, execution);
}


export {
      TEST_ORIENTATION_PLANES_FROM_PARCELLATION_METADATA,
      TestOrientationPlanesFromParcellationOutputs,
      TestOrientationPlanesFromParcellationParameters,
      test_orientation_planes_from_parcellation,
      test_orientation_planes_from_parcellation_params,
};
